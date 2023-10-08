import MobileSidebar from "./MobileSidebar";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Input } from "../Input/Input";
export const Header = () => {
  const pathName = usePathname();

  const profilePic =
    "https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg";
  return (
    <div className="flex items-center px-10 py-4 border-b-2  ">
      <MobileSidebar />
      <div className="flex justify-end items-center lg:justify-between w-full">
        {pathName === "/settings" ? (
          <p className="font-semibold text-2xl hidden lg:flex">Settings</p>
        ) : (
          <>
            <div className="hidden lg:flex w-[400px]">
              <Input
                inputClass="w-full focus:none outline-none "
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
          </>
        )}

        <div className="flex items-center gap-2">
          <div className="hidden lg:block w-10 h-10  mx-auto rounded-full overflow-hidden">
            <Image
              loader={() => profilePic}
              src={profilePic}
              alt="User profile picture"
              className="object-cover w-full h-full"
              layout="fixed"
              width={100}
              height={100}
            />
          </div>
          <p className="hidden lg:block font-inter font-semibold">Hello Tam!</p>
        </div>
      </div>
    </div>
  );
};
