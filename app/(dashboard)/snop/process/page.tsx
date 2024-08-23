'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import {
  BanknotesIcon,
  PresentationChartLineIcon,
  CubeIcon,
  ArchiveBoxArrowDownIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  TruckIcon,
  ChevronDownIcon,
  RocketLaunchIcon
} from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const components = [
  {
    title: 'Demand Review',
    to: '/snop/process',
    icon: RocketLaunchIcon,
    iconcolr: 'text-blue-500'
  },
  {
    title: 'Supply Review',
    to: '/snop/process/supply',
    icon: CubeIcon
  },
  {
    title: 'Inventory Review',
    to: '/snop/process/inventory',
    icon: ArchiveBoxArrowDownIcon
  },
  {
    title: 'Distribution Meeting',
    to: '/snop/process/distribution',
    icon: TruckIcon
  },
  {
    title: 'New Product Review',
    to: '/snop/process/product',
    icon: ArrowTrendingUpIcon
  },

  {
    title: 'Demand Supply Balancing',
    to: '/snop/process/balance',
    icon: ScaleIcon
  },
  {
    title: 'Financial Planning',
    to: '/snop/process/finance',
    icon: BanknotesIcon
  },
  {
    title: 'Executive Meeting',
    to: '/snop/process/executive',
    icon: PresentationChartLineIcon
  }
];

export default function ProcessData({ children }: { children: React.ReactNode }) {
  const [selectedProcess, setSelectedProcess] = useState('Process');
  return (
    <>
      <div>
        <div className="w-100 m-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Sales & Operations Planning
          </h2>

          <div className="flex items-center justify-end">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {selectedProcess}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  {components.map((component) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="py-1 ">
                      <Menu.Item
                        key={component.title}
                        onClick={() => setSelectedProcess(component.title)}
                      >
                        {({ active }) => (
                          <Link
                            href={component.to}
                            className={classNames(
                              active
                                ? 'bg-sky-100  text-sky-500 border border-sky-500 '
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm '
                            )}
                          >
                            <component.icon
                              className="mr-3 h-5 w-5 text-gray-400 hover:text-sky-500 rounded-lg"
                              aria-hidden="true"
                            />
                            {component.title}
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <>{children}</>
      </div>
    </>
  );
}
