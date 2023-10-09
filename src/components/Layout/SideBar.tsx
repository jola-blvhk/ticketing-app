"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MdTimeline } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarDays, FaX } from "react-icons/fa6";
import { SlLogout, SlSettings } from "react-icons/sl";
import { cn } from "@/lib/utils/cn";
import { GrFormClose } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
// @ts-ignore
import type { Hanko } from "@teamhanko/hanko-elements";
import { useEffect, useState } from "react";
interface SidebarProps {
  onClickX?: () => void;
  onClickLink?: () => void;
}

const routes = [
  {
    label: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    label: "Tickets",
    path: "/tickets",
    icon: IoTicketOutline,
  },
  {
    label: "Admin",
    path: "/admin",
    icon: MdOutlineAdminPanelSettings,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SlSettings,
  },
  {
    label: "Need Help?",
    path: "/faqs",
    icon: FiHelpCircle,
  },
];

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
const SideBar = ({ onClickLink, onClickX }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-red-700">
      <div className="px-3 py-10 flex-1 text-white bg-secondary rounded-r-lg">
        <div className="flex items-center justify-between mb-6 lg:mb-14 ">
          <Link href="/timeline" className="pl-3 flex items-center">
            <div className="relative w-12 h-12 mr-4">
              <h1 className="italic font-montserrat font-bold text-2xl lg:text-3xl">
                Wetin<span className="text-primary">Dey</span>Sup
              </h1>
            </div>
          </Link>
          <GrFormClose className="md:hidden" onClick={onClickX} />
        </div>
        <div className="flex flex-col justify-between h-[75dvh]">
          <div className="space-y-2">
            {routes.map((route) => (
              <Link
                href={route.path}
                key={route.path}
                onClick={onClickLink}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition",
                  pathname === route.path
                    ? " text-secondary"
                    : "text-white bg-none hover:bg-white/10"
                )}
              >
                <div className="flex items-center flex-1 text-lg lg:text-xl">
                  <route.icon className={cn("h-5 w-5 mr-3 text-xl")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => {
                logout();
                onClickLink;
              }}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition text-white bg-none hover:bg-white/10 items-center"
            >
              <TbLogout2 className={cn("h-5 w-5 mr-3 text-xl")} />
              <div className="flex items-center flex-1 text-lg lg:text-xl">
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
