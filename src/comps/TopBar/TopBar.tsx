import * as React from 'react'
import { css, styled } from '../../styles'
import { darkTheme } from '../../styles'
import { Block } from '../Block/Block'
import { Section } from '../Block/Section'
import { Link } from '../Link/Link'
import { Logo } from '../Logo/Logo'

console.log({ darkTheme })

const containerCss = css({
  background: '$contrast0',
  width: '100%',
  height: 48,
})

export const TopBar = (props) => {
  return (
    <Section
      justify="between"
      align="center"
      className={darkTheme}
      css={containerCss}
    >
      <Block>
        <Logo />
      </Block>
      <Block justify="end" align="center" gap={6}>
        <Link>Home</Link>
        <Link>Presets</Link>
        <Link>Users</Link>
        <Link>Account</Link>
      </Block>
    </Section>
  )
}
