"use client";

import Header from "@/components/header";

import {
  TableCellsIcon,
  ArrowTrendingUpIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/20/solid';
// import { Toaster } from "react-hot-toast";
import Sidebar from '@/components/SidebarDemo'

import { Providers } from "../providers";

 const senariomenus = [
   {
     name: 'Configuration',
     to: '/network/config',
     icon: ChartBarIcon,
     current: true
   },
   {
     name: 'Segmentation',
     to: '/network/segment',
     icon: TableCellsIcon,
     current: false
   },
   {
     name: 'Service',
     to: '/network/service',
     icon: CpuChipIcon,
     current: false
   },
   {
     name: 'Cost',
     to: '/network/cost',
     icon: ArrowTrendingUpIcon,
     current: false
   },
   {
     name: 'Capital',
     to: '/network/capital',
     icon: PresentationChartBarIcon,
     current: false
   },
   {
     name: 'Network Simulation',
     to: '/network/netsim',
     icon: PresentationChartBarIcon,
     current: false
   }
 ];
// export const experimental_ppr = true;
const navigation = [
  { name: 'Network', to: '/network/config', current: true },
  { name: 'Track & Trace', to: '/track/order', current: false },
  { name: 'Events', to: '/events/demand', current: false },
  { name: 'Planning', to: '/planning/demand', current: false },
  { name: 'Execution', to: '/execution/store', current: false }
];
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
        <Header title="Inventory Optimizer" navigation={navigation} />
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
