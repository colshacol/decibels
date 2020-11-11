import * as React from 'react'
import { If, Then, Else } from 'react-if'
import { styled, css } from '../../styles'

export const Spacer = styled.div({
  width: '0px',
  height: '0px',
  padding: '$1',

  variants: {
    size: {
      xs: {
        padding: '$2',
      },
      md: {
        padding: '$3',
      },
      lg: {
        padding: '$4',
      },
      xl: {
        padding: '$5',
      },
      xxl: {
        padding: '$6',
      },
    },
  },
})
