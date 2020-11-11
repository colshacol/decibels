const sharedTokens = {
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

  sizes: {
    $1: '33.333%',
    $2: '66.666%',
    $3: '100%',
  },

  borderStyles: {
    $border0: '1px solid $contrast7',
    $border1: '1px solid $contrast7',
    $border2: '1px solid $contrast7',
    $border3: '1px solid $contrast7',
    $border4: '2px solid $contrast7',
  },
}

export const lightTheme = {
  ...sharedTokens,

  colors: {
    $red0: '#fae8ea',
    $red1: '#f5d0d4',
    $red2: '#f0b9bf',
    $red3: '#eba1aa',
    $red4: '#e68a95',
    $red5: '#e0727f',
    $red6: '#db5b6a',
    $red7: '#d64355',
    $red8: '#d12c3f',
    $red9: '#CC142A',

    $green0: '#e8faf5',
    $green1: '#d0f5ec',
    $green2: '#b9f0e2',
    $green3: '#a1ebd8',
    $green4: '#8ae6cf',
    $green5: '#72e0c5',
    $green6: '#5bdbbb',
    $green7: '#43d6b1',
    $green8: '#2cd1a8',
    $green9: '#14CC9E',

    $contrast0: '#ffffff',
    $contrast1: '#e6e7e7',
    $contrast2: '#ccd0cf',
    $contrast3: '#b3b8b7',
    $contrast4: '#9aa19f',
    $contrast5: '#818987',
    $contrast6: '#67716f',
    $contrast7: '#4e5a57',
    $contrast8: '#35423f',
    $contrast9: '#1b2b27',
    $contrast10: '#02130f',
  },

  shadows: {
    $shadow0: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    $shadow1: '0px 0px 8px rgba(0, 0, 0, 0.25)',
    $shadow2: '0px 0px 8px rgba(0, 0, 0, 0.4)',
    $shadow3: '0px 0px 8px rgba(0, 0, 0, 0.55)',
    $clearShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    $clearSvgShadow: ' 0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
}

export const darkTheme = {
  ...sharedTokens,

  colors: {
    $contrast8: '#ffffff',
    $contrast7: '#EEF3F2',
    $contrast6: '#E1E5E4',
    $contrast5: '#C1C5C4',
    $contrast4: '#9DA8A5',
    $contrast3: '#67716E',
    $contrast2: '#404A48',
    $contrast1: '#28302E',
    $contrast0: '#02130F',
  },
}
