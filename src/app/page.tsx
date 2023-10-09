"use client";

import DashboadLayout from "@/components/Layout/DashboardLayout";
import SideBar from "@/components/Layout/SideBar";
import Image from "next/image";

import { BiCopy, BiSolidCopy } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState<Boolean>(false);

  const employeeCode: string = "hello ther";

  const customerCode: string = "heloooooo";
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(
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
        <div className="px-8 py-6 z-20">
          <div>
            <h1>Employee Invite Url</h1>
            <div>
              <h1></h1>
              <div
                className="p-4 flex border w-fit"
                onClick={() => copyToClipboard(employeeCode)}
              >
                {employeeCode}
                <BiSolidCopy />
              </div>
            </div>
          </div>
          <div>
            <h1>Customer Ticket Link</h1>
            <div>
              <h1></h1>
              <div
                className="p-4 flex border w-fit"
                onClick={() => copyToClipboard(customerCode)}
              >
                {customerCode}
                <BiSolidCopy />
              </div>
            </div>
          </div>
        </div>
      </DashboadLayout>
    </>
  );
}
