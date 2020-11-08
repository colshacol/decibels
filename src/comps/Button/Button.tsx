import * as React from 'react'
import { styled, css } from '../../styles'

export const Button = styled('button', {
  cursor: 'pointer',
  flexbox: 'row x-center y-center nowrap',
  borderRadius: 3,
  textTransform: 'uppercase',
  fontFamily: '$mainFont',
  outline: '1px solid unset',
  border: 'none',

  letterSpacing: 2,
  fontWeight: 800,
  background: '$contrast1',
  color: '$black',
  height: '28px !important',
  padding: '0 32px',
  fontSize: 14,

  '&:active': {
    background: '$contrast2',
    outline: '1px solid $contrast7',
    outlineColor: '$contrast7',
    boxShadow: '$shadow1',
  },

  '&:not(:active):focus': {
    background: '$contrast2',
    outline: '1px solid $contrast3',
    outlineColor: '$contrast3',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },

    size: {
      big: {
        height: '40px !important',
        padding: '0 32px',
        fontSize: 14,
      },
    },

    look: {
      bold: {
        background: '$black',
        color: '$white',

        outline: '1px solid $brandGreen',
        // border: '1px solid inherit',

        '&:active': {
          background: '$gray8',
          boxShadow: '$shadow3',
        },

        '&:not(:active):focus': {
          background: '$gray8',
          outline: '1px solid $brandGreen',
          outlineColor: '$brandGreen',
        },
      },
    },
  },
})
