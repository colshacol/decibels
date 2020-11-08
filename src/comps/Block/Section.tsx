import * as React from 'react'
import { If, Then, Else } from 'react-if'
import { styled, css } from '../../styles'
import { Block } from './Block'

export const Section = styled(Block, {
  paddingLeft: 'calc(((100vw - 1200px) / 2) + 24px)',
  paddingRight: 'calc(((100vw - 1200px) / 2) + 24px)',
})
