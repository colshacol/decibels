import * as React from 'react'
import { If, Then, Else } from 'react-if'
import { styled, css } from '../../styles'
import { Tag } from './Tag'

export const TagList = styled('div', {
  flexbox: 'row wrap',
  marginTop: '17px',
  width: '100%',

  [`& > ${Tag}`]: {
    marginRight: 8,
    marginBottom: 10,
  },
})

TagList.defaultProps = {
  className: '',
}
