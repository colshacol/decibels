import * as React from 'react'
import { styled, css } from '../../styles'

export const Text = styled('p', {
  fontFamily: '$mainFont',
  fontSize: 14,
  color: '$contrast8',

  variants: {
    look: {
      tag: {
        color: '$contrast8',
        fontFamily: '$mainFont',
        letterSpacing: 2,
        fontWeight: 800,
        lineHeight: '80%',
        textTransform: 'uppercase',
        fontSize: 10,
      },

      support: {
        color: '$contrast5',
        fontFamily: '$mainFont',
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 800,
        lineHeight: '140%',
        letterSpacing: 1.5,
      },

      fatLink: {
        fontFamily: '$mainFont',
        color: '$green9',
        cursor: 'pointer',
        fontWeight: 800,
        fontSize: 20,
        letterSpacing: -0.25,
      },

      blockTitle: {
        // textShadow: '$clearShadow',
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
