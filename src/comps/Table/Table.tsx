import faker from 'faker'
import sort from 'fast-sort'
import mems from 'mems'
import * as React from 'react'
import { Table as FluidTable } from 'react-fluid-table'
import { useImmer } from 'use-immer'
import { styled } from '../../styles'

const tableRows = Array(192)
  .fill('')
  .map((_, i) => ({
    id: i + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }))

const columns = [
  { key: 'id', header: 'ID', sortable: true, width: 100 },
  { key: 'firstName', header: 'First', sortable: true, width: 120 },
  { key: 'lastName', header: 'Last', sortable: true, width: 120 },
  { key: 'email', header: 'Email', sortable: true, width: 250 },
]

const useTableState = props => {
  const [state, setState] = useImmer({
    sortDirection: props.initialSortDirection,
    sortedColumn: props.initialSortedColumn,
    searchValue: props.initialSearchValue,
    tableRows: props.rows,
    rawRows: props.rows,
  })

  const setSortDirection = sortDirection => {
    setState(draft => {
      draft.sortDirection = sortDirection
    })
  }

  const setSortedColumn = sortedColumn => {
    setState(draft => {
      draft.sortedColumn = sortedColumn
    })
  }

  const setSearchValue = searchValue => {
    setState(draft => {
      draft.searchValue = searchValue
    })
  }

  const applySort = (sortedColumn, sortDirection) => {
    setState(draft => {
      draft.sortedColumn = sortedColumn || props.initialSortColumn
      draft.sortDirection = sortDirection || props.initialSortDirection
    })
  }

  React.useEffect(() => {
    setState(draft => {
      draft.rawRows = props.rows
      draft.tableRows = props.rows
    })
  }, [props.rows.length > 0])

  const deriveRows = React.useMemo(() => {
    return mems((sortedColumn, sortDirection, searchValue) => {
      console.log(
        'deriving new table rows',
        sortedColumn,
        sortDirection,
        searchValue,
      )
      return sort([...state.rawRows])[sortDirection.toLowerCase()](
        row => row[sortedColumn],
      )
    })
  }, [state.rawRows])

  const rows = deriveRows(
    state.sortedColumn,
    state.sortDirection,
    state.searchValue,
  )

  return {
    data: rows,
    columns: props.columns,
    setSortDirection,
    setSortedColumn,
    setSearchValue,
    applySort,
  }
}

export function Table(props) {
  const tableState = useTableState(props)

  return (
    <TableWrapper
      id={props.id}
      className={`DecibelsTable scrollContainer ${props.className}`}
      data={tableState.data}
      columns={tableState.columns}
      rowHeight={40}
      tableHeight={400}
      onSort={tableState.applySort}
      sortColumn={props.initialSortColumn}
      sortDirection={props.initialSortDirection}
    />
  )
}

const TableWrapper = styled(FluidTable, {
  '&.react-fluid-table': {
    border: '1px solid $contrast10',
    borderRight: 'none',
    overscrollBehavior: 'contain',
  },

  '&.react-fluid-table::-webkit-scrollbar': {
    background: '#eef3f2',
    borderLeft: '1px solid $contrast10',
    width: 8,
  },

  '&.react-fluid-table::-webkit-scrollbar-track': {
    // height: 200,
    // marginTop: 48,
  },

  '&.react-fluid-table::-webkit-scrollbar-thumb': {
    background: '$contrast6',
    borderLeft: '1px solid $contrast10',
    width: 8,
  },

  '& .row-container .cell': {
    // padding: '8px 16px',
  },

  '& .row-container .cell:first-of-type': {
    paddingLeft: 16,
  },

  '& .react-fluid-table-container': {
    background: '#fff',
  },

  '& .row-container': {
    // background: '$contrast10',
  },

  '& .react-fluid-table-row:hover': {
    background: '$contrast1',
  },

  '& .react-fluid-table-header': {
    background: '$contrast10',
    // borderBottom: '1px solid $contrast10',
    boxShadow: '$shadow2',
  },

  '& .header-cell:first-of-type': {
    paddingLeft: 16,
  },

  '& .header-cell-text': {
    whiteSpace: 'nowrap',
    fontFamily: '$mainFont',
    letterSpacing: 2,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: 14,
    color: '$contrast0',
  },

  '& .header-cell-arrow.asc': {
    borderBottom: '10px solid $contrast3',
  },

  '& .header-cell-arrow.desc': {
    borderTop: '10px solid $contrast3',
  },
})

Table.defaultProps = {
  className: '',
  id: '',
  initialSortDirection: 'ASC',
  initialSortedColumn: 'id',
  initialSearchValue: '',
  rows: tableRows,
  columns: columns,
}
