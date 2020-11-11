import * as React from 'react'
import { styled } from '../../styles'
import { Icons } from './Icons'

console.log({ Icons })

export const Icon = (props) => {
  const Component = Icons[props.iconName]
  // const src = `/assets/icons/${props.name}.svg`
  return <Component {...props} />
}
