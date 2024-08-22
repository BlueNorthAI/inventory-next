import * as React from 'react'
import { getter } from '@progress/kendo-react-common'
import { DataResult, process, State } from '@progress/kendo-data-query'
import { Input } from '@progress/kendo-react-inputs'
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
  GridHeaderSelectionChangeEvent,
  GridSelectionChangeEvent,
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuGroup,
  GridCustomCellProps,
  GridColumnMenuProps,
} from '@progress/kendo-react-grid'
import { setGroupIds, setExpandedState } from '@progress/kendo-react-data-tools'

export const ColumnMenu = (props: GridColumnMenuProps) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
      <GridColumnMenuGroup {...props} />
    </div>
  )
}

export const CountryCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  if (!dataItem || !dataItem.flag) {
    return null
  }

  return (
    <td {...props.tdProps}>
      <div className="flex space-x-2">
        <img src={dataItem.flag} width="30" height="16" alt="Flag" />
        <span className="text-base ">{dataItem.country}</span>
      </div>
    </td>
  )
}

export const employees = [
  {
    id: 1,
    country: 'United States',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    country: 'Canada',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    country: 'United Kingdom',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    country: 'Australia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    country: 'Germany',
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  {
    id: 6,
    country: 'France',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  },
  {
    id: 7,
    country: 'Italy',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  },
  {
    id: 8,
    country: 'Spain',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  },
  {
    id: 9,
    country: 'Japan',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  },
  {
    id: 10,
    country: 'Brazil',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  },
  {
    id: 11,
    country: 'South Korea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  },
  {
    id: 12,
    country: 'Russia',
    flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  },
  {
    id: 13,
    country: 'India',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    id: 14,
    country: 'China',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  {
    id: 15,
    country: 'Mexico',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  },
  {
    id: 16,
    country: 'Argentina',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  },
  {
    id: 17,
    country: 'Netherlands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  },
  {
    id: 18,
    country: 'Switzerland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  },
  {
    id: 19,
    country: 'Sweden',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  },
  {
    id: 20,
    country: 'Norway',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
  },
]

const DATA_ITEM_KEY = 'id'
const SELECTED_FIELD = 'selected'

const initialDataState: State = {
  take: 20,
  skip: 0,
  group: [],
}

const processWithGroups = (data, dataState: State) => {
  const newDataState = process(data, dataState)

  setGroupIds({ data: newDataState.data, group: dataState.group })

  return newDataState
}
export default function CountryBoarding() {
  const idGetter = getter('id')
  const [filteredData, setFilteredData] = React.useState(employees)
  const [currentSelectedState, setCurrentSelectedState] = React.useState<{
    [id: string]: boolean | number[]
  }>({})
  const [dataState, setDataState] = React.useState<State>(initialDataState)
  const [dataResult, setDataResult] = React.useState(
    process(filteredData, dataState)
  )

  const [data, setData] = React.useState(filteredData)

  
  const [resultState, setResultState] = React.useState<DataResult>(
    processWithGroups(
      employees.map((item) => ({
        ...item,
        ['selected']: currentSelectedState[idGetter(item)],
      })),
      initialDataState
    )
  )

  const dataStateChange = (event) => {
    let processedData = process(filteredData, event.dataState)
    processedData.data = processedData.data.map((item) => ({
      ...item,
      selected: currentSelectedState[item[DATA_ITEM_KEY]],
    }))
    setDataResult(processedData)
    setDataState(event.dataState)
  }

  const onExpandChange = React.useCallback(
    (event) => {
      const newData = [...dataResult.data]
      const item = event.dataItem
      if (item.groupId) {
        const targetGroup = newData.find((d) => d.groupId === item.groupId)
        if (targetGroup) {
          targetGroup.expanded = event.value
          setDataResult({
            ...dataResult,
            data: newData,
          })
        }
      } else {
        item.expanded = event.value
        setDataResult({
          ...dataResult,
          data: newData,
        })
      }
    },
    [dataResult]
  )

  const setSelectedValue = (data) => {
    return data.map((item) => ({
      ...item,
      selected: currentSelectedState[item[DATA_ITEM_KEY]],
    }))
  }

  const newData = setExpandedState({
    data: setSelectedValue(resultState.data),
    collapsedIds: [],
  })

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent) => {
      const checkboxElement: any = event.syntheticEvent.target
      const checked = checkboxElement.checked

      const newSelectedState = {}
      data.forEach((item) => {
        newSelectedState[idGetter(item)] = checked
      })

      setCurrentSelectedState(newSelectedState)

      const newData = data.map((item) => ({
        ...item,
        [SELECTED_FIELD]: checked,
      }))

      const newDataResult = processWithGroups(newData, dataState)
      setDataResult(newDataResult)
    },
    [data, dataState]
  )

  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const selectedProductId = event.dataItem.id
    const newSelectedState = {
      ...currentSelectedState,
      [selectedProductId]: !currentSelectedState[selectedProductId],
    }
    setCurrentSelectedState(newSelectedState)

    const newData = data.map((item) => {
      return { ...item, selected: newSelectedState[idGetter(item)] }
    })
    const newDataResult = processWithGroups(newData, dataState)
    setDataResult(newDataResult)
  }

  const getNumberOfItems = (data: any[]) => {
    let count = 0
    data.forEach((item) => {
      if (item.items) {
        count = count + getNumberOfItems(item.items)
      } else {
        count++
      }
    })
    return count
  }

  const getNumberOfSelectedItems = (data: any[]) => {
    let count = 0
    data.forEach((item) => {
      if (item.items) {
        count = count + getNumberOfSelectedItems(item.items)
      } else {
        count = count + (item.selected == true ? 1 : 0)
      }
    })
    return count
  }
  const checkHeaderSelectionValue = () => {
    let selectedItems = getNumberOfSelectedItems(newData)
    return newData.length > 0 && selectedItems == getNumberOfItems(newData)
  }

  return (
    <div>
      <Grid
        style={{ height: '440px' }}
        data={dataResult}
        sortable={true}
        rowHeight={50}
        total={resultState.total}
        onDataStateChange={dataStateChange}
        {...dataState}
        onExpandChange={onExpandChange}
        expandField="expanded"
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        onHeaderSelectionChange={onHeaderSelectionChange}
        onSelectionChange={onSelectionChange}
        // groupable={true}
        size={'medium'}
      >
       
        <Column
          filterable={false}
          field={SELECTED_FIELD}
          width={50}
          headerSelectionValue={checkHeaderSelectionValue()}
        />

        <Column
          field="country"
          title="Country"
          cells={{
            data: CountryCell,
          }}
          columnMenu={ColumnMenu}
          width="315px"
        />
      </Grid>
    </div>
  )
}
