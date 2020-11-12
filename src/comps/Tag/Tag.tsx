import * as React from 'react'
import { If, Then, Else } from 'react-if'
import { styled, css } from '../../styles'

export const Tag = styled('span', {
  cursor: 'pointer',
  height: '20px !important',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  padding: '0 6px',
  border: '1px solid $contrast8',
  whiteSpace: 'nowrap',
  userSelect: 'none',

  // Text styles.
  color: '$contrast8',
  fontFamily: '$mainFont',
  letterSpacing: 2,
  fontWeight: 800,
  lineHeight: '80%',
  textTransform: 'uppercase',
  fontSize: 10,

  '&:hover': {
    background: '$green1',
  },

  variants: {
    size: {
      big: {
        padding: '0 8px',
        height: '24px !important',
        fontSize: 14,
      },
    },
    look: {
      bold: {
        background: '$contrast10',
        color: '#fff',

        '&:hover': {
          background: '$contrast8',
        },
      },
    },
  },
})

Tag.defaultProps = {
  isDisabled: false,
}
