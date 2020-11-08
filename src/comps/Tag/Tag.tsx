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
  border: '1px solid $black',
  whiteSpace: 'nowrap',
  userSelect: 'none',

  // Text styles.
  color: '$black',
  fontFamily: '$mainFont',
  letterSpacing: 2,
  fontWeight: 800,
  lineHeight: '80%',
  textTransform: 'uppercase',
  fontSize: 10,

  variants: {
    look: {
      bold: {
        backgroundColor: '$black',
        color: '$white',
      },
    },
  },
})

Tag.defaultProps = {
  isDisabled: false,
}
