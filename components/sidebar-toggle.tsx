import { useSidebar } from "@/lib/hooks/use-sidebar";

import logoAssetUrl from "../public/logo.png";
import Image from "next/image";
// eslint-disable-next-line import/no-unresolved
export function SidebarToggle() {
  // const { toggleSidebar } = useSidebar();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <button
      className="ml-6 flex  hover:bg-sky-500/20 hover:rounded-full hover:border border-white/10"
     onClick={toggleSidebar}>
      {/* {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} */}

      <Image
        className="mx-auto p-1"
        src={logoAssetUrl}
        alt="logo"
        width={40}
        height={40}
      />

      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}
