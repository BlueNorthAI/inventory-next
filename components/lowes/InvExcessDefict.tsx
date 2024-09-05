"use client";

import { useState, Fragment } from 'react'

import { AgCharts } from 'ag-charts-react';

import {
  generatedDeficitData,
  generatedInventoryExcess,
} from '@/app/data/agGrid/snop/inventory/excessDeficit'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Progress } from '@/components/ui/progress'


const inventory = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]
const deficit = [
  {
    title: 'SKU-775833',
    location: 'Location016',
    deficit: '1.9M',
    percent: 9,
  },
  {
    title: 'SKU-569018',
    location: 'Location017',
    deficit: '0.6M',
    percent: 20,
  },
  {
    title: 'SKU-166046',
    location: 'Location018',
    deficit: '1.8M',
    percent: 58,
  },
  {
    title: 'SKU-144887',
    location: 'Location019',
    deficit: '0.4M',
    percent: 76,
  },
]
const dataExcess = generatedInventoryExcess
const dataDeficit = generatedDeficitData

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InvExcessDefict() {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState({
    data: dataExcess,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'excess',
        sizeKey: 'percent',
        sizeName: 'Excess',
        fills: ['#43A047'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    // title: {
    //   text: '',
    // },
    // subtitle: {
    //   text: '',
    // },
  })
  const [options2, setOptions2] = useState({
    data: dataDeficit,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'deficit',
        sizeKey: 'percent',
        sizeName: 'Deficit',
        strokes: ['#000'],
        fills: ['#FF5722'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    // title: {
    //   text: '',
    // },
    // subtitle: {
    //   text: '',
    // },
  })

  return (
    <div className="bg-white rounded-b-lg border  w-100">
   
      <div className="flex justify-between  space-x-4 ">
        <div className="w-full bg-white rounded-b-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Excess</TableHead>
                <TableHead>Percent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((invoice) => (
                <TableRow key={invoice.title}>
                  <TableCell className="font-medium">{invoice.title}</TableCell>
                  <TableCell className="font-medium">
                    {invoice.location}
                  </TableCell>
                  <TableCell className="font-medium">
                    {invoice.deficit}
                  </TableCell>
                  <TableCell>
                    <Progress
                      indicatorColor="bg-green-400"
                      value={invoice.percent}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="w-full h-[500px]">
            <AgCharts options={options} />
          </div>
        </div>
        <div className="w-full bg-white rounded-b-md border">
          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Deficit</TableHead>
                  <TableHead>Percent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deficit.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="w-100 font-medium">
                      {invoice.title}
                    </TableCell>
                    <TableCell className="w-100 font-medium">
                      {invoice.location}
                    </TableCell>
                    <TableCell className="w-100 font-medium">
                      {invoice.deficit}
                    </TableCell>
                    <TableCell className="w-200 ">
                      <Progress
                        indicatorColor="bg-red-400"
                        value={invoice.percent}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-full h-[500px]">
            <AgCharts options={options2} />
          </div>
        </div>
      </div>
    </div>
  )
}
