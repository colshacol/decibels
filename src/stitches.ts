import { createStyled } from '@stitches/react'
import { findOne } from './utilities/findOne'

const findFlexDirection = findOne([
  'row',
  'rowReverse',
  'column',
  'columnReverse',
])

const findFlexHorizontal = findOne([
  'xCenter',
  'xBetween',
  'xAround',
  'xEvenly',
  'xStart',
  'xEnd',
])

const flexAlignMapX = {
  xCenter: 'center',
  xBetween: 'space-between',
  xAround: 'space-around',
  xEvenly: 'space-evenly',
  xStart: 'flex-start',
  xEnd: 'flex-end',
}

const findFlexAlignX = (input: string[]) => {
  const found: string = findFlexHorizontal(input)
}

export const { styled, css } = createStyled({
  prefix: 're-',
  tokens: {
    colors: {
      $black: '#000',
      $white: '#fff',
    },
    fonts: {
      $mainFont: '"Manrope", "DM Sans", system-ui, sans-serif',
    },
  },
  breakpoints: {},

  utils: {
    flexbox: () => (input: string[]) => {
      return {
        display: 'flex',
        flexDirection: findFlexDirection(input),
      }
    },
  },
})
