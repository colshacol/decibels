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

Icons.soundBars = (props) => (
  <Svg
    viewBox="0 0 24 24"
    {...props}
    // style={{ width: 16, height: 4, ...(props.style || {}) }}
    className={`RebassIcon menuIcon ${props.className || ''}`}
  >
    <path
      d="M0.927381 6.60491C0.415157 6.60491 0 7.02007 0 7.53229V16.4677C0 16.9799 0.415157 17.3951 0.927381 17.3951C1.4396 17.3951 1.85476 16.9799 1.85476 16.4677V7.53229C1.85476 7.02007 1.4396 6.60491 0.927381 6.60491Z"
      fill="#14CC9E"
    />
    <path
      d="M5.35645 3.92511C4.84423 3.92511 4.42907 4.34026 4.42907 4.85249V19.1476C4.42907 19.6598 4.84423 20.0749 5.35645 20.0749C5.86868 20.0749 6.28383 19.6598 6.28383 19.1476V4.85249C6.28383 4.34026 5.86868 3.92511 5.35645 3.92511Z"
      fill="#14CC9E"
    />
    <path
      d="M9.78552 0.195374C9.27329 0.195374 8.85814 0.610531 8.85814 1.12275V22.8772C8.85814 23.3894 9.27329 23.8045 9.78552 23.8045C10.2977 23.8045 10.7129 23.3894 10.7129 22.8772V1.12275C10.7129 0.610634 10.2977 0.195374 9.78552 0.195374Z"
      fill="#14CC9E"
    />
    <path
      d="M14.2145 5.60149C13.7023 5.60149 13.2871 6.01665 13.2871 6.52887V17.4713C13.2871 17.9835 13.7023 18.3986 14.2145 18.3986C14.7267 18.3986 15.1419 17.9835 15.1419 17.4713V6.52887C15.1419 6.01665 14.7267 5.60149 14.2145 5.60149Z"
      fill="#14CC9E"
    />
    <path
      d="M18.6436 6.60491C18.1313 6.60491 17.7162 7.02007 17.7162 7.53229V16.4677C17.7162 16.9799 18.1313 17.3951 18.6436 17.3951C19.1558 17.3951 19.5709 16.9799 19.5709 16.4677V7.53229C19.5709 7.02007 19.1557 6.60491 18.6436 6.60491Z"
      fill="#14CC9E"
    />
    <path
      d="M23.0726 9.57458C22.5604 9.57458 22.1452 9.98974 22.1452 10.502V13.4981C22.1452 14.0104 22.5604 14.4255 23.0726 14.4255C23.5848 14.4255 24 14.0104 24 13.4981V10.502C24 9.98974 23.5848 9.57458 23.0726 9.57458Z"
      fill="#14CC9E"
    />
  </Svg>
)
