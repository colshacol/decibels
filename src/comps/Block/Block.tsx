import * as React from 'react'
import { If, Then, Else } from 'react-if'
import { styled, css } from '../../styles'

export const Block = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      rowReverse: { flexDirection: 'row-reverse' },
      column: { flexDirection: 'column' },
      columnReverse: { flexDirection: 'column-reverse' },
    },

    align: {
      center: { alignItems: 'center' },
      start: { alignItems: 'start' },
      end: { alignItems: 'end' },
      baseline: { alignItems: 'baseline' },
    },

    justify: {
      center: { alignItems: 'center' },
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },

    width: {
      '1': {
        width: '33%',
      },
      '2': {
        width: '66%',
      },
      '3': {
        width: '100%',
      },
    },

    border: {
      1: {
        border: '1px solid $contrast8',
      },
    },

    gap: {
      1: { gap: 4 },
      2: { gap: 8 },
      3: { gap: 12 },
      4: { gap: 16 },
      5: { gap: 20 },
      6: { gap: 24 },
    },
  },
})
