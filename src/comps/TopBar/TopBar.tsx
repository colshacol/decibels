import * as React from 'react'
import { css, styled } from '../../stitches'
import { darkTheme } from '../../styles/darkTheme'
import { Block } from '../Block/Block'
import { Logo } from '../Logo/Logo'

const Container = styled(Block, {
  background: '$contrast4',
})

export const TopBar = (props) => {
  return (
    <Container justify="between" css={darkTheme}>
      <Block>
        <Logo />
      </Block>
      <Block justify="end" gap={6}>
        <span>Home</span>
        <span>Presets</span>
        <span>Users</span>
        <span>Account</span>
      </Block>
    </Container>
  )
}
