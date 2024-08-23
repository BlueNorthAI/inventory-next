'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PrinterIcon } from '@heroicons/react/24/outline';
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon
} from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { columnsmeeting } from '@/components/datatable/columns-meeting';
import { DataTable } from '@/components/datatable/data-table-meeting';
import taskData from '@/app/data/columndata/tasks.json';

import DemandPlanning from '@/components/lowes/DemandPlanning';
import ConsensusForecast from '@/components/lowes/ConsensusForecast';
import ForecastDemand from '@/components/lowes/ForecastDemand';
import { cn } from '@/lib/utils';

// async function getTasks() {
//   const data = await taskData;
//   return data;
// }

// export const loader = async () => {
//   const tasks = await getTasks();
//   const demandData = tasks.filter(
//     (task) => task.label === 'Demand Planning' && task.severity === 'High'
//   );
//   // console.log('demandData', demandData)
//   return json({ tasks, demandData });
// };


function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}

export default function ProcessIndex() {
  const [position, setPosition] = React.useState('bottom');
//   const { tasks, demandData } = useLoaderData();
  return (
    <>
      <div className="m-4">
        <Tabs defaultValue="meeting" className="tracking-normal">
          <div className="">
            {/* <h1 className="text-3xl font-bold">Demand Review</h1> */}
            <TabsList className="">
              <TabsTrigger value="meeting" className="relative">
                Meeting
              </TabsTrigger>
              <TabsTrigger value="Demand" className="relative">
                Forecast Accuracy
              </TabsTrigger>
              {/* <TabsTrigger className="" value="New">
                Customer Forecasts
              </TabsTrigger> */}
              <TabsTrigger className="" value="Consensus">
                Demand Consensus
              </TabsTrigger>
              <TabsTrigger className="" value="DemandSupply">
                Demand Plan
              </TabsTrigger>
            </TabsList>
          </div>
          <DemoContainer>
            <TabsContent value="meeting">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Demand Review</div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan'24
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="">
                <DataTable data={taskData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Demand">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Forecast Accuracy</div>
                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan'24
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>

              <div>
                <ForecastDemand />
              </div>
            </TabsContent>
            {/* <TabsContent value="New">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">New Product Review</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
                            <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>New</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
                            <Pencil2Icon className="text-purple-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
                            <TrashIcon className="text-red-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
                            <PrinterIcon className="text-yellow-800 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Print</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <div>New Product Review</div>
            </TabsContent> */}
            <TabsContent value="Consensus">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Consensus Review</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
                            <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>New</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
                            <Pencil2Icon className="text-purple-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
                            <TrashIcon className="text-red-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
                            <PrinterIcon className="text-yellow-800 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Print</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>
                <ConsensusForecast />
              </div>
            </TabsContent>
            <TabsContent value="DemandSupply">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Demand Supply Balancing</div>

                  <div className="m-2 space-x-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Timeline</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>View Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Weekly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Monthly
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Quarterly
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Plan</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={position}
                          onValueChange={setPosition}
                        >
                          <DropdownMenuRadioItem value="top">
                            Jan 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">
                            Feb 2024
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">
                            Mar 2024
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div>
                <DemandPlanning />
              </div>
            </TabsContent>

            <TabsContent value="Financial">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Financial Planning</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
                            <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>New</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
                            <Pencil2Icon className="text-purple-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
                            <TrashIcon className="text-red-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
                            <PrinterIcon className="text-yellow-800 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Print</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Financial Planning</div>
            </TabsContent>

            <TabsContent value="Executive">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Executive Meeting</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
                            <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>New</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
                            <Pencil2Icon className="text-purple-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
                            <TrashIcon className="text-red-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
                            <PrinterIcon className="text-yellow-800 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Print</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Executive Meeting</div>
            </TabsContent>
          </DemoContainer>
        </Tabs>
      </div>
    </>
  );
}







// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { PrinterIcon } from '@heroicons/react/24/outline';
// import {
//   FilePlusIcon,
//   Pencil2Icon,
//   TrashIcon,
//   DownloadIcon
// } from '@radix-ui/react-icons';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger
// } from '@/components/ui/tooltip';
// import SupplyDashboard from '@/components/lowes/SupplyDashboard';
// import SpendAnalysis from '@/components/lowes/SpendAnalysis';
// import PayableAnalysis from '@/components/lowes/PayableAnalysis';
// import CategoryAnalysis from '@/components/lowes/CategoryAnalysis';
// import ExpenseAnalysis from '@/components/lowes/ExpenseAnalysis';
// import POGovernance from '@/components/lowes/PoGovernce';
// import taskData from '@/app/data/columndata/tasks.json';
// import { cn } from '@/lib/utils';
// import { columnsmeeting } from '@/components/datatable/columns-meeting';
// import { DataTable } from '@/components/datatable/data-table-meeting';

// function DemoContainer({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div
//       className={cn(
//         'flex items-center justify-center [&>div]:w-full',
//         className
//       )}
//       {...props}
//     />
//   );
// }

// export default function InventoryIndex() {
//     // const { tasks, supplyData } = useLoaderData();

//   return (
//     <>
//       <div className="m-4">
//         <Tabs defaultValue="Meeting" className="tracking-normal">
//           <div className="flex ">
//             {/* <h1 className="text-3xl font-bold">Inventory Review</h1> */}
//             <TabsList className="">
//               <TabsTrigger value="Meeting" className="Meeting">
//                 Meeting
//               </TabsTrigger>
//               <TabsTrigger value="Procurement" className="relative">
//                 Procurement Governance
//               </TabsTrigger>
//               <TabsTrigger className="" value="Spend">
//                 Spend Analysis
//               </TabsTrigger>
//               <TabsTrigger className="" value="Payable">
//                 Payable Analysis
//               </TabsTrigger>
//               <TabsTrigger className="" value="Category">
//                 Category Analysis
//               </TabsTrigger>
//               <TabsTrigger className="" value="Expense">
//                 Expense Analysis
//               </TabsTrigger>
//               <TabsTrigger className="" value="SupplyDashboard">
//                 Supply Dashboard
//               </TabsTrigger>
//             </TabsList>
//           </div>
//           <DemoContainer>
//             <TabsContent value="Meeting">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Supply Review</div>
//                 </div>
//               </div>

//               <div className="">
//                 {/* <DataTable data={supplyData} columns={columnsmeeting} /> */}
//               </div>
//             </TabsContent>
//             <TabsContent value="Procurement">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Supply Review</div>
//                 </div>
//               </div>

//               <div>
//                 <POGovernance />
//               </div>
//             </TabsContent>

//             <TabsContent value="Spend">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Spend Analysis</div>

//                   <div className="m-2 space-x-1">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-indigo-100 "
//                           >
//                             <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>New</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-purple-100"
//                           >
//                             <Pencil2Icon className="text-purple-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Edit</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-red-100"
//                           >
//                             <TrashIcon className="text-red-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Delete</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-yellow-100"
//                           >
//                             <PrinterIcon className="text-yellow-800 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Print</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-green-100"
//                           >
//                             <DownloadIcon className="text-green-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Download</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <SpendAnalysis />
//               </div>
//             </TabsContent>
//             <TabsContent value="Payable">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Payable Analysis</div>

//                   <div className="m-2 space-x-1">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-indigo-100 "
//                           >
//                             <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>New</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-purple-100"
//                           >
//                             <Pencil2Icon className="text-purple-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Edit</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-red-100"
//                           >
//                             <TrashIcon className="text-red-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Delete</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-yellow-100"
//                           >
//                             <PrinterIcon className="text-yellow-800 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Print</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-green-100"
//                           >
//                             <DownloadIcon className="text-green-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Download</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <PayableAnalysis />
//               </div>
//             </TabsContent>
//             <TabsContent value="Category">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Category Analysis</div>

//                   <div className="m-2 space-x-1">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-indigo-100 "
//                           >
//                             <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>New</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-purple-100"
//                           >
//                             <Pencil2Icon className="text-purple-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Edit</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-red-100"
//                           >
//                             <TrashIcon className="text-red-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Delete</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-yellow-100"
//                           >
//                             <PrinterIcon className="text-yellow-800 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Print</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-green-100"
//                           >
//                             <DownloadIcon className="text-green-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Download</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <CategoryAnalysis />
//               </div>
//             </TabsContent>
//             <TabsContent value="Expense">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Expense Analysis</div>

//                   <div className="m-2 space-x-1">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-indigo-100 "
//                           >
//                             <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>New</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-purple-100"
//                           >
//                             <Pencil2Icon className="text-purple-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Edit</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-red-100"
//                           >
//                             <TrashIcon className="text-red-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Delete</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-yellow-100"
//                           >
//                             <PrinterIcon className="text-yellow-800 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Print</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-green-100"
//                           >
//                             <DownloadIcon className="text-green-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Download</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <ExpenseAnalysis />
//               </div>
//             </TabsContent>
//             <TabsContent value="SupplyDashboard">
//               <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
//                 <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
//                   <div className="p-2">Supply Planning Dashboard</div>

//                   <div className="m-2 space-x-1">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-indigo-100 "
//                           >
//                             <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>New</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-purple-100"
//                           >
//                             <Pencil2Icon className="text-purple-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Edit</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-red-100"
//                           >
//                             <TrashIcon className="text-red-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Delete</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-yellow-100"
//                           >
//                             <PrinterIcon className="text-yellow-800 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Print</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="bg-green-100"
//                           >
//                             <DownloadIcon className="text-green-700 w-6 h-6 " />
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Download</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <SupplyDashboard />
//               </div>
//             </TabsContent>
//           </DemoContainer>
//         </Tabs>
//       </div>
//     </>
//   );
// }
