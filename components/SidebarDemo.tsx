"use client";  // Add this line

import {
  CubeIcon,
  GearIcon,
  MixIcon,
  PieChartIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PowerIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from '@/auth';



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({sidebarMenu}: {sidebarMenu: any[]}) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
  
      <div
        className={`  ${
        open ? 'w-24' : 'w-16'
      } text-gray-100 duration-500 `}
      >
          <nav aria-label="Sidebar">
            <div className="static  w-full mt-3 flex-1 space-y-1 px-2 border-r h-screen">
              {sidebarMenu?.map((item, index) => (
                <Link href={item.to} key={item.id} className={classNames(
                  pathname === item.to
                    ? "bg-sky-100 text-sky-500 border border-sky-500"
                    : "text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500",
                  "group  flex flex-col items-center rounded-md p-4 "
                )}>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                   <h2 className="text-center text-xs font-medium ">{item?.name}</h2>
                  {/* <h2
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    className={`whitespace-pre duration-500 text-center text-xs px-2 ${
                      !open && "translate-x-28 overflow-hidden opacity-0"
                    }`}
                  >
                    {item.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300`}
                  >
                    {item.name}
                  </h2> */}
                </Link>
              ))}
           
      
        <div className="px-2">
          {/* <Link href="/snop/appbar" className={classNames(
            "text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500",
            "group  flex flex-col items-center rounded-md p-4"
          )}>
            <DashboardIcon className="h-4 w-4" aria-hidden="true" />
            <h2
              className={`whitespace-pre duration-500 text-center px-2 ${
                !open && "translate-x-28 overflow-hidden opacity-0"
              }`}
            >
              App Bar
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300`}
            >
              App Bar
            </h2>
          </Link> */}

            {/* <form
          action={async () => {
           
            await signOut();
          }}
        >
          <button className="text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500 group flex w-full flex-col items-center rounded-md p-4 text-xs font-medium">
              <PowerIcon className="w-4 h-4" />
               <h2
              className={`whitespace-pre duration-500 ${
                !open && "translate-x-28 overflow-hidden opacity-0"
              }`}
            >
             Sign Out
            </h2>
            
          </button>
        </form> */}
          </div>
           </div>
         
         </nav>
      </div>

     
   
  );
}
