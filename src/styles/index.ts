import { createStyled } from '@stitches/react'
import { paramCase } from 'change-case'

import * as tokens from './tokens'

export const { styled, css } = createStyled({
  prefix: '',

  breakpoints: {},
  tokens: tokens.lightTheme,

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

export const lightTheme = css.theme(tokens.lightTheme)
export const darkTheme = css.theme(tokens.darkTheme)
export { tokens }
