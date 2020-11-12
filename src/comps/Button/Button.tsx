import * as React from 'react'
import { styled, css } from '../../styles'

export const Button = styled('button', {
  cursor: 'pointer',
  flexbox: 'row x-center y-center nowrap',
  borderRadius: 3,
  textTransform: 'uppercase',
  fontFamily: '$mainFont',
  outline: 'none',
  border: 'none',
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },

    intent: {
      default: {
        border: 'none',
        background: '#d6dbda',
        color: '$contrast10',
        // outline: '1px solid unset',

        '&:active': {
          background: '#bec2c2',
          // outline: '1px solid $contrast9',
          // outlineColor: '$contrast9',
          // boxShadow: '$shadow1',
        },

        // '&:not(:active):focus': {
        //   background: '$contrast2',
        //   outline: '1px solid $contrast3',
        //   outlineColor: '$contrast3',
        // },
      },

      main: {
        background: '$contrast10',
        color: '#fff',
        // outline: '1px solid $brandGreen',

        '&:active': {
          background: '$contrast9',
          // boxShadow: '$shadow1',
        },

        // '&:not(:active):focus': {
        //   background: '$contrast9',
        //   outline: '1px solid $brandGreen',
        //   outlineColor: '$brandGreen',
        // },
      },

      danger: {
        background: '$red9',
        color: '#fff',
        // outline: '1px solid $red1',

        '&:active': {
          outline: '1px solid $red5',
          background: '$red8',
          // boxShadow: '$shadow1',
        },

        // '&:not(:active):focus': {
        //   background: '$red5',
        //   outline: '1px solid $red0',
        //   outlineColor: '$red0',
        // },
      },
    },

    size: {
      default: {
        height: '28px !important',
        letterSpacing: 2,
        fontWeight: 800,
        padding: '0 24px',
        fontSize: 14,
      },
      big: {
        height: '40px !important',
        letterSpacing: 2,
        padding: '0 32px',
        fontWeight: 800,
        fontSize: 14,
      },
    },

    look: {
      outline: {
        background: 'transparent',
        borderWidth: '2px',
        borderStyle: 'solid',
      },
      ghost: {
        background: 'transparent',
        borderWidth: '2px',
        borderStyle: 'solid',
      },
    },
  },
})

Button.defaultProps = {
  intent: 'default',
  size: 'default',
}

// Button.compoundVariant(
//   {
//     intent: '',
//     appearance: 'outline',
//   },
//   {
//     color: 'blueViolet',
//     borderColor: 'darkviolet',
//     ':hover': {
//       color: 'white',
//     },
//   },
// )
