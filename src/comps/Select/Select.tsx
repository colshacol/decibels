import * as React from 'react'
import { If, Then, Else } from 'react-if'
import ReactSelect from 'react-select'
import { styled, css, tokens } from '../../styles'

const lightThemeTokens = tokens.lightTheme

const selectors = {
  mainElements:
    '& .Select__value-container, & .Select__control, & .Select__indicators',
  control: '& .Select__control',
  placeholder: '& .Select__placeholder',
  option: '& .Select__option',
  hoveredOption: '& .Select__option:hover',
  selectedOption: '& .Select__option--is-selected',
  firstOption: '& .Select__option:first-of-type',
  lastOption: '& .Select__option:last-of-type',
  menu: '& .Select__menu',
  menuList: '& .Select__menu-list',
  menuListScrollbar: '& .Select__menu-list::-webkit-scrollbar',
  menuListDragger: '& .Select__menu-list::-webkit-scrollbar-thumb',
  arrowSeparator: '& .Select__indicator-separator',
  arrow: '& .Select__indicator',
}

export const Select = styled(ReactSelect, {
  appearance: 'none',
  // Outline
  outline: 'none',
  // Border
  border: 'none',
  borderRadius: 0,
  boxShadow: 'inset 0 0 0 1px $gray600',
  // Box
  paddingLeft: '$1',
  paddingRight: '$1',
  // Size
  height: 28,
  maxHeight: 28,
  maxWidth: 300,
  minWidth: 160,
  // Background
  backgroundColor: 'transparent',
  // Layout
  // Text
  whiteSpace: 'nowrap',
  fontFamily: '$mainFont',
  fontSize: 16,
  color: '$contrast8',

  [selectors.mainElements]: {
    maxHeight: 28,
    minHeight: 28,
    borderColor: '$contrast8',
  },

  [selectors.control]: {
    borderRadius: 0,
    maxHeight: 26,
    color: '$contrast8',
  },

  [selectors.placeholder]: {
    color: '$contrast8',
    fontFamily: '$mainFont',
    letterSpacing: 2,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: 14,
  },

  [selectors.option]: {
    whiteSpace: 'nowrap',
    fontFamily: '$mainFont',
    fontSize: 16,
    color: '$contrast8',
    height: 32,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
  },

  // [selectors.hoveredOption]: {
  //   background: '$green4',
  // },

  // [selectors.selectedOption]: {
  //   background: '$brandGreen',
  // },

  [selectors.firstOption]: {
    paddingTop: 2,
  },

  [selectors.lastOption]: {
    paddingTop: 1,
  },

  [selectors.menu]: {
    boxShadow: '$shadow1',
    border: '1px solid $contrast8',
    // borderRadius: 3,
    marginTop: 12,
  },

  [selectors.menuList]: {
    padding: 0,
  },

  [selectors.menuListScrollbar]: {
    background: 'transparent',
    width: 0,
  },

  [selectors.menuListDragger]: {
    width: 12,
  },

  [selectors.arrowSeparator]: {
    background: '$contrast8',
    display: 'none',
  },

  [selectors.arrow]: {
    color: '$contrast4',
    paddingTop: 5,
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },

    size: {
      big: {
        height: 40,
        maxHeight: 40,

        [selectors.option]: {
          height: 40,
        },

        [selectors.mainElements]: {
          maxHeight: 40,
          minHeight: 40,
        },

        [selectors.control]: {
          borderRadius: 0,
          maxHeight: 38,
        },
      },
    },

    width: {
      '0': {
        width: 160,
        maxWidth: 160,
        minWidth: 'unset',
      },
      '1': {
        width: 240,
        maxWidth: 240,
        minWidth: 'unset',
      },
      '2': {
        width: 320,
        maxWidth: 320,
        minWidth: 'unset',
      },
      '3': {
        width: '100%',
        maxWidth: '100%',
        minWidth: 'unset',
      },
    },
  },
})

Select.defaultProps = {
  // menuIsOpen: true,
  className: 'RebassSelect',
  options: [],
  maxMenuHeight: 180,
  classNamePrefix: 'Select',

  theme: (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: lightThemeTokens.colors.$green9,
      primary25: lightThemeTokens.colors.$green3,
      primary50: lightThemeTokens.colors.$green5,
      primary75: lightThemeTokens.colors.$green8,
    },
  }),
}

// interface IOption {
//   label: string
//   value: any
// }

// type OptionT = {
//   howdyPartner1234: string
//   yolo1220: any
// }

// type ActionT = {
//   action: string
//   name?: string
//   option?: any
// }

// type PropsT = {
//   onChange: (option: OptionT, action: ActionT) => void
// }
