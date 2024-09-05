"use client";

import  Header  from "@/components/header";
import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon
} from '@radix-ui/react-icons';
// import { Toaster } from "react-hot-toast";
import Sidebar from '@/components/SidebarDemo'

import { Providers } from "../providers";

 const senariomenus = [
   {
     id: 1,
     name: 'Master Data',
     to: '/capacity/master',
     icon: CubeIcon,
     current: false
   },
   {
     id: 4,
     name: 'Capacity Optimizer',
     to: '/capacity/scenarioanalysis',
     icon: BarChartIcon,
     current: false
   },
   {
     id: 5,
     name: 'Scenario Planning',
     to: '/capacity/scenarioplan',
     icon: MixIcon,
     current: true
   },
   {
     id: 6,
     name: 'Optimizer',
     to: '/capacity/optimize',
     icon: PieChartIcon,
     current: true
   },
   {
     id: 7,
     name: 'Scenario Planning',
     to: '/capacity/scenario',
     icon: GearIcon,
     current: true
   }
 ];
// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div className="h-screen flex flex-col">
      {/* <Toaster /> */}
   <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header title="Inventory Optimizer" navigation={[]} />
        <div className="flex  bg-slate-50 shadow-lg">
          <Sidebar sidebarMenu={senariomenus} />
          <div className="w-full flex flex-col p-4 overflow-y-auto bg-slate-100">
          {children}
          </div>
        </div>
       </Providers>
    </div>
  );
}
