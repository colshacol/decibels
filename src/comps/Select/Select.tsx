import * as React from 'react'
import { If, Then, Else } from 'react-if'
import ReactSelect from 'react-select'
import { styled, css } from '../../styles'

export const Container = styled(ReactSelect, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  fontFamily: '$mainFont',
  height: 28,
  maxHeight: 28,
  fontSize: 16,
  boxShadow: 'inset 0 0 0 1px $gray600',
  pl: '$1',
  borderRadius: 3,
  color: '$contrast8',
  width: 300,

  '& .rebass__value-container, & .rebass__control, & .rebass__indicators': {
    height: '32px !important',
    maxHeight: '32px !important',
    minHeight: 32,
    borderColor: '$contrast8',
  },

  '& .rebass__indicator-separator': {
    background: '$contrast8',
  },

  '& .rebass__indicator': {
    color: '$contrast8',
  },
})

export const Select = (props: PropsT) => {
  return (
    <Container
      className="Select"
      options={props.options}
      classNamePrefix="rebass"
    />
  )
}

type PropsT = {
  options: IOption[]
}

interface IOption {
  // label: string
  // value: string
  [key: string]: any
}

Select.defaultProps = {
  options: [],
}
