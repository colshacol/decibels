import * as React from 'react'
import { styled, css } from '../../styles'

export const Text = styled('p', {
  fontFamily: '$mainFont',
  fontSize: 14,
  color: '$black',

  variants: {
    look: {
      tag: {
        color: '$black',
        fontFamily: '$mainFont',
        letterSpacing: 2,
        fontWeight: 800,
        lineHeight: '80%',
        textTransform: 'uppercase',
        fontSize: 10,
      },

      support: {
        color: '$gray3',
        fontFamily: '$mainFont',
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 800,
        lineHeight: '140%',
        letterSpacing: 1.5,
      },

      fatLink: {
        fontFamily: '$mainFont',
        color: '$brandGreen',
        cursor: 'pointer',
        fontWeight: 800,
        fontSize: 20,
        letterSpacing: -0.5,
      },

      blockTitle: {
        textShadow: '$clearShadow',
        fontSize: 22,
        fontWeight: 650,
        lineHeight: '130%',
        letterSpacing: -0.3,
        fontStyle: 'normal',
        fontFamily: '$mainFont',
      },
    },
  },
})

Text.defaultProps = {}
