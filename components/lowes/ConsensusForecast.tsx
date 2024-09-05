'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Button } from '../ui/button'; // Adjust the import path as necessary
import { CellClassParams, ValueParserParams } from 'ag-grid-enterprise';

// Define cell class rules for conditional styling
const ragCellClassRules: CellClassRules = {
  'rag-green-outer': (params) => params.value === 2008,
  'rag-blue-outer': (params) => params.value === 2004,
  'rag-red-outer': (params) => params.value === 2000
};

// Define a function to set the cell style based on conditions
const cellStyle = (params: CellClassParams) => {
  const color = numberToColor(params);
  return {
    backgroundColor: color
  };
};

// Function to determine the background color based on value
const numberToColor = (params) => {
  if (
    [
      'Target Plan (Revenue)',
      'Financial Forecast (Revenue)',
      'POS (Revenue)',
      'Weighted Sales Price'
    ].includes(params.data.measure)
  ) {
    return '';
  }
  if (params.data.measure === 'Achievement Rate') {
    if (params.value < 75) {
      return '#ffaaaa';
    }
    if (params.value < 90) {
      return '#fef9c3';
    }
    return '#aaffaa';
  }
};

// Custom cell renderer for displaying values
const ragRenderer = (params: CustomCellRendererProps) => {
  return <span className="rag-element">{params.value}</span>;
};

// Value parser function to convert input to a numeric value
const numberParser = (params: ValueParserParams) => {
  const newValue = params.newValue;
  let valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
};

export default function ConsensusForecast({ data }) {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const getRowId = useCallback((params) => {
    return params.data.id;
  }, []);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true
    }),
    []
  );

  const columnDefs = [
    {
      headerName: 'Product Location Storage Unit',
      marryChildren: true,
      children: [
        {
          field: 'customer',
          colId: 'customer',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true
        },
        {
          field: 'site',
          colId: 'site',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true
        },
        {
          field: 'item',
          headerName: 'Item',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true
        },
        {
          field: 'measure',
          filter: 'agTextColumnFilter',
          flex: 2
        }
      ]
    },
    {
      headerName: '2024Q1',
      marryChildren: true,
      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return Math.floor(
              p.data['2024-Jan'] + p.data['2024-Feb'] + p.data['2024-Mar']
            ).toLocaleString();
          },
          type: 'numericColumn',
          columnGroupShow: 'open'
        },
        {
          field: '2024-Jan',
          headerName: 'Jan',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          type: 'numericColumn',
          columnGroupShow: 'closed'
        },
        {
          field: '2024-Feb',
          headerName: 'Feb',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed',
          cellClassRules: ragCellClassRules,
          cellRenderer: ragRenderer
        },
        {
          field: '2024-Mar',
          headerName: 'Mar',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed'
        }
      ]
    },
    {
      headerName: '2024Q2',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',
      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return (
              '£' +
              Math.floor(
                p.data['2024-Apr'] + p.data['2024-May'] + p.data['2024-Jun']
              ).toLocaleString()
            );
          },
          cellStyle: cellStyle,
          type: 'numericColumn',
          columnGroupShow: 'open'
        },
        {
          field: '2024-Apr',
          headerName: 'Apr',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          type: 'numericColumn',
          columnGroupShow: 'closed'
        },
        {
          field: '2024-May',
          headerName: 'May',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed'
        },
        {
          field: '2024-Jun',
          headerName: 'Jun',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed'
        }
      ]
    },
    {
      headerName: '2024Q3',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',
      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return (
              '£' +
              Math.floor(
                p.data['2024-Jul'] + p.data['2024-Aug'] + p.data['2024-Sep']
              ).toLocaleString()
            );
          },
          type: 'numericColumn',
          columnGroupShow: 'open'
        },
        {
          field: '2024-Jul',
          headerName: 'Jul',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          type: 'numericColumn',
          columnGroupShow: 'closed'
        },
        {
          field: '2024-Aug',
          headerName: 'Aug',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed'
        },
        {
          field: '2024-Sep',
          headerName: 'Sep',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString();
          },
          columnGroupShow: 'closed'
        }
      ]
    }
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        domLayout="autoHeight"
        getRowId={getRowId}
        enableRangeSelection={true}
        groupDisplayType="groupRows"
        enableCharts={true}
        sideBar={true}
        groupDefaultExpanded={3}
      />
    </div>
  );
}
