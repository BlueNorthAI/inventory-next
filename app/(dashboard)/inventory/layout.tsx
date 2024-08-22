"use client";

import { Header } from "@/components/header";
import {
  CubeIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  ExclamationTriangleIcon,
  LoopIcon,
  CameraIcon,
  Component1Icon,
  RocketIcon,
  ViewGridIcon,
} from '@radix-ui/react-icons'
// import { Toaster } from "react-hot-toast";
import Sidebar from '@/components/SidebarDemo'

import { Providers } from "../providers";

 const senariomenus = [
   {
     id: 4,
     name: 'Dashboard',
     to: '/inventory/dashboard',
     icon: CubeIcon,
     current: false
   },
   {
     id: 5,
     name: 'Events',
     to: '/inventory/meeting',
     icon: ViewGridIcon,
     current: false
   },
  //  {
  //    id: 9,
  //    name: 'Inventory On Hand',
  //    to: '/inventory/onhand',
  //    icon: Component1Icon,
  //    current: false
  //  },
   {
     id: 15,
     name: 'Scenario Analyzer',
     to: '/inventory/scenarioanalysis',
     icon: BarChartIcon,
     current: false
   },
   {
     id: 6,
     name: 'Root Cause Analysis',
     to: '/inventory/flowchart',
     icon: RocketIcon,
     current: false
   },
  //  {
  //    id: 7,
  //    name: 'Backlog Analyzer',
  //    to: '/inventory/back',
  //    icon: MixIcon,
  //    current: false
  //  },
   {
     id: 8,
     name: 'SKU Service',
     to: '/inventory/skuservice',
     icon: PieChartIcon,
     current: false
   },

   {
     id: 10,
     name: 'Input Data',
     to: '/inventory/input',
     icon: CameraIcon,
     current: false
   },
   {
     id: 15,
     name: 'Scenario',
     to: '/inventory/scenario',
     icon: BarChartIcon,
     current: false
   },
   {
     id: 15,
     name: 'Optimize',
     to: '/inventory/optimize',
     icon: BarChartIcon,
     current: false
   },
  //  {
  //    id: 1,
  //    name: 'Inventory Optimizer',
  //    to: '/inventory/inventoryopt',
  //    icon: CubeIcon,
  //    current: true
  //  },

  //  {
  //    id: 2,
  //    name: 'Current Inventory',
  //    to: '/inventory/current',
  //    icon: LoopIcon,
  //    current: false
  //  },
  //  {
  //    id: 3,
  //    name: 'Recommendation',
  //    to: '/inventory/recommend',
  //    icon: ExclamationTriangleIcon,
  //    current: false
  //  }
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
        <Header title="Inventory Optimizer" />
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
