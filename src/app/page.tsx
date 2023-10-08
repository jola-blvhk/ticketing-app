"use client";

import DashboadLayout from "@/components/Layout/DashboardLayout";
import SideBar from "@/components/Layout/SideBar";
import Image from "next/image";
import ultralightCopy from "copy-to-clipboard-ultralight";
import { BiCopy, BiSolidCopy } from "react-icons/bi";
import { useState, MouseEvent } from "react";

export default function Home() {
  const [copied, setCopied] = useState<Boolean>(false);

  const employeeCode: string = "hello ther";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(employeeCode).then(
      () => {},
      (err) => {
        console.error(err);
      }
    );
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  // async function clickHandler(event: MouseEvent) {
  //   event.preventDefault();
  //   console.log("Hello there");
  // }
  return (
    <>
      <DashboadLayout>
        <div className="px-8 py-6">
          <div>
            <h1>Employee Invite Url</h1>
            <div>
              <h1></h1>
              <div className="p-4 border w-fit" onClick={copyToClipboard}>
                <BiSolidCopy />
              </div>
            </div>
          </div>
        </div>
      </DashboadLayout>
    </>
  );
}
