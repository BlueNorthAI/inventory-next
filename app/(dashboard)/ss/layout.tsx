"use client";

import Header from "@/components/header";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  TableCellsIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/20/solid';
import { GrTree } from 'react-icons/gr';
import { RiBarChartBoxLine } from 'react-icons/ri';
// import { Toaster } from "react-hot-toast";
import Sidebar from '@/components/SidebarDemo'

import { Providers } from "../providers";

 const senariomenus = [
   {
     name: 'Risk Analysis',
     to: '/ss/dc',
     icon: ChartBarIcon,
     current: true
   },
   {
     name: 'Comparison',
     to: '/ss/comparison',
     icon: ChartBarIcon,
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
        <Header title="Inventory Optimizer" navigation={[]}  />
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
