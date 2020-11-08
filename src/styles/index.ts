import { createStyled } from '@stitches/react'
import { paramCase } from 'change-case'

export const { styled, css } = createStyled({
  prefix: '',

  breakpoints: {},

  tokens: {
    colors: {
      $brandGreen: '#0DCA9B',
      $gray0: '#e2e6ef',
      $gray3: '#8f9bb3',
      $gray8: '#292929',
      $black: '#000',
      $white: '#fff',

      $contrast0: '#ffffff',
      $contrast1: '#e2e6ef',
      $contrast2: '#cfd3dd',
      $contrast3: '#a8b1c4',
      $contrast4: '#8f9bb3',
      $contrast5: '#ffffff',
      $contrast6: '#ffffff',
      $contrast7: '#292929',
      $contrast8: '#000000',
    },

    fonts: {
      $mainFont: '"DM Sans", system-ui, sans-serif',
      $altFont: '"Inter", system-ui, sans-serif',
    },

    space: {
      $1: '4px',
      $2: '8px',
      $3: '12px',
      $4: '16px',
      $5: '20px',
      $6: '24px',
      $7: '28px',
      $8: '32px',
      $9: '36px',
      $10: '40px',
    },

    shadows: {
      $shadow0: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      $shadow1: '0px 0px 8px rgba(0, 0, 0, 0.25)',
      $shadow2: '0px 0px 8px rgba(0, 0, 0, 0.4)',
      $shadow3: '0px 0px 8px rgba(0, 0, 0, 0.55)',
      $clearShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      $clearSvgShadow: ' 0px 1px 3px rgba(0, 0, 0, 0.1)',
    },
  },

  utils: {
    size: () => (input: string): any => {
      const values = input
        .split(' ')
        .map((item) => (item === '_' ? undefined : item))

      const final = {
        width: undefined,
        height: undefined,
        minWidth: undefined,
        minHeight: undefined,
        maxWidth: undefined,
        maxHeight: undefined,
      }

      const lastValue = values[values.length - 1]
      const shouldForce = ['force'].includes(lastValue)

      if (values.length === 3) {
        final.width = values[0]
        final.height = values[1]

        if (shouldForce) {
          final.minWidth = values[0]
          final.maxWidth = values[0]
          final.minHeight = values[1]
          final.maxHeight = values[1]
        }
      }

      if (values.length === 2) {
        final.width = values[0]
        final.height = values[0]

        if (shouldForce) {
          final.minWidth = values[0]
          final.maxWidth = values[0]
          final.minHeight = values[0]
          final.maxHeight = values[0]
        }
      }

      return final
    },

    flexbox: () => (input: string[] | string): any => {
      const values = typeof input === 'string' ? input.split(' ') : input

      const final = {
        display: 'flex',
        justifyContent: undefined,
        alignItems: undefined,
        flexWrap: 'nowrap',
        flexDirection: 'row',
      }

      const isColumn = values.find((value) => value.includes('column'))
      const fixFlexxValue = (value) => paramCase(value.substr(2))
      if (isColumn) final.flexDirection = isColumn

      for (const value of values) {
        const startsWith = (arag) => value.startsWith(arag)
        const includes = (arg) => value.includes(arg)
        if (includes('wrap')) final.flexWrap = value

        if (isColumn) {
          if (startsWith('x')) final.alignItems = fixFlexxValue(value)
          if (startsWith('y')) final.justifyContent = fixFlexxValue(value)
        } else {
          if (startsWith('x')) final.justifyContent = fixFlexxValue(value)
          if (startsWith('y')) final.alignItems = fixFlexxValue(value)
        }
      }

      return final
    },
  },
})
