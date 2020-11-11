import * as React from 'react'
import { styled } from '../../styles'

export const Icons: any = {}

const Svg = styled.svg({
  fill: '$contrast8',

  variants: {
    look: {
      subtle: {
        fill: '$contrast4',
      },
    },
  },
})

Icons.home = (props) => (
  <Svg
    viewBox="0 0 20 19"
    {...props}
    className={`RebassIcon homeIcon ${props.className || ''}`}
    // style={{ width: 20, height: 19, ...(props.style || {}) }}
  >
    <path d="M0 9.99997L9.293 0.706971C9.6835 0.316589 10.3165 0.316589 10.707 0.706971L20 9.99997H18V18C18 18.5523 17.5523 19 17 19H12V12H8V19H3C2.44772 19 2 18.5523 2 18V9.99997H0Z" />
  </Svg>
)

Icons.userCard = (props) => (
  <Svg
    viewBox="0 0 20 16"
    {...props}
    // style={{ width: 20, height: 16, ...(props.style || {}) }}
    className={`RebassIcon userCardIcon ${props.className || ''}`}
  >
    <path d="M18 16H2C0.930516 16.032 0.0364164 15.1933 0 14.124V1.875C0.0364132 0.805809 0.930683 -0.0325688 2 2.24984e-06H18C19.0693 -0.0325688 19.9636 0.805809 20 1.875V14.125C19.963 15.1939 19.0691 16.032 18 16ZM2 2V13.989L18 14V2.011L2 2ZM11.43 12H4C4.07353 11.1721 4.46534 10.4049 5.093 9.86C5.79183 9.16672 6.73081 8.76921 7.715 8.75C8.69919 8.76921 9.63817 9.16672 10.337 9.86C10.9645 10.4051 11.3563 11.1721 11.43 12ZM16 11H13V9H16V11ZM7.715 8C7.17907 8.01863 6.65947 7.8139 6.28029 7.43471C5.9011 7.05553 5.69638 6.53593 5.715 6C5.69668 5.46416 5.9015 4.94474 6.28062 4.56562C6.65974 4.1865 7.17916 3.98168 7.715 4C8.25084 3.98168 8.77026 4.1865 9.14938 4.56562C9.5285 4.94474 9.73332 5.46416 9.715 6C9.73362 6.53593 9.5289 7.05553 9.14971 7.43471C8.77053 7.8139 8.25093 8.01863 7.715 8ZM16 7H12V5H16V7Z" />
  </Svg>
)

Icons.play = (props) => (
  <Svg
    viewBox="0 0 11 14"
    {...props}
    // style={{ width: 11, height: 14, ...(props.style || {}) }}
    className={`RebassIcon playIcon ${props.className || ''}`}
  >
    <path d="M0 14L11 7L0 0V14Z" />
  </Svg>
)

Icons.pause = (props) => (
  <Svg
    viewBox="0 0 20 20"
    {...props}
    // style={{ width: 20, height: 20, ...(props.style || {}) }}
    className={`RebassIcon pauseIcon ${props.className || ''}`}
  >
    <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM11 6V14H13V6H11ZM7 6V14H9V6H7Z" />
  </Svg>
)

Icons.menu = (props) => (
  <Svg
    viewBox="0 0 16 4"
    {...props}
    // style={{ width: 16, height: 4, ...(props.style || {}) }}
    className={`RebassIcon menuIcon ${props.className || ''}`}
  >
    <path d="M14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 0 14 0C15.1046 0 16 0.89543 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4ZM8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z" />
  </Svg>
)
