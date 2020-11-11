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
  letterSpacing: 2,
  fontWeight: 800,
  height: '28px !important',
  padding: '0 32px',
  fontSize: 14,

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
        background: '$contrast2',
        color: '$contrast',
        // outline: '1px solid unset',

        '&:active': {
          background: '$contrast3',
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
      big: {
        height: '40px !important',
        padding: '0 32px',
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
