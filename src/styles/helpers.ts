import { asMapped } from '../utilities/asMapped'
import { findOne } from '../utilities/findOne'

// ----- flex-direction

const flexDirectionInputs = ['row', 'rowReverse', 'column', 'columnReverse']

const findFlexDirectionInput = findOne(flexDirectionInputs)

const flexDirectionMap = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
}

// ----- justify-content

const flexHorizontalInputs = [
  'xCenter',
  'xBetween',
  'xAround',
  'xEvenly',
  'xStart',
  'xEnd',
  'xNormal',
  'xStretch',
  'xBaseline',
  'xInherit',
  'xInitial',
  'xUnset',
]

const findFlexHorizontalInput = findOne(flexHorizontalInputs)

const flexHorizontalMap = {
  xCenter: 'center',
  xBetween: 'space-between',
  xAround: 'space-around',
  xEvenly: 'space-evenly',
  xStart: 'flex-start',
  xEnd: 'flex-end',
}

const flexVerticalInputs = [
  'xCenter',
  'xBetween',
  'xAround',
  'xEvenly',
  'xStart',
  'xEnd',
]

const findFlexVerticalInput = findOne(flexHorizontalInputs)

const flexVerticalMap = {
  xCenter: 'center',
  xBetween: 'space-between',
  xAround: 'space-around',
  xEvenly: 'space-evenly',
  xStart: 'flex-start',
  xEnd: 'flex-end',
}

// CSS Properties

const flexHorizontalKeyInputs = ['row', 'rowReverse', 'column', 'columnReverse']

const findFlexHorizontalKeyInput = findOne(flexHorizontalKeyInputs)

const flexHorizontalKeyMap = {
  row: 'justify-content',
  rowReverse: 'justify-content',
  column: 'align-items',
  columnReverse: 'align-items',
}

const flexVerticalKeyInputs = ['row', 'rowReverse', 'column', 'columnReverse']

const findFlexVerticalKeyInput = findOne(flexVerticalKeyInputs)

const flexVerticalKeyMap = {
  column: 'justify-content',
  columnReverse: 'justify-content',
  row: 'align-items',
  rowReverse: 'align-items',
}

// Final helpers.

export const getFlexHorizontalKey = asMapped(
  findFlexHorizontalKeyInput,
  flexHorizontalKeyMap,
)

export const getFlexVerticalKey = asMapped(
  findFlexVerticalKeyInput,
  flexVerticalKeyMap,
)

export const getFlexDirection = asMapped(
  findFlexDirectionInput,
  flexDirectionMap,
)

export const getFlexHorizontal = asMapped(
  findFlexHorizontalInput,
  flexHorizontalMap,
)

export const getFlexVertical = asMapped(findFlexVerticalInput, flexVerticalMap)

const cssValueStore = {
  flexDirectionMap: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },

  flexHorizontalValueMap: {
    row: {
      xCenter: 'center',
      xBetween: 'space-between',
      xAround: 'space-around',
      xEvenly: 'space-evenly',
      xStart: 'flex-start',
      xEnd: 'flex-end',
    },
  
    condition(data) {
      return data.direction.includes('row')
        ? cssValueStore.flexHorizontalValueMap.row
        : cssValueStore.flexHorizontalValueMap.column
      }
    }
  }

  getKeys(storeKey: string) {
    return Object.keys(cssValueStore[storeKey])
  },

  getValues(storeKey: string) {
    return Object.values(cssValueStore[storeKey])
  },
}

const getFlexHorizontalInputs = (values) => {}

export const findOneOf = (options, fallback: string = '') => (target) => {
  for (const option of options) if (target.includes(option)) return option
  return fallback
}

const findDirection = findOneOf(cssValueStore.getKeys('flexDirectionMap'))

export const getFlexboxHelper = (values: string[]) => {
  const direction = findDirection(values)

  return {
    direction,
    values,
  }
}
