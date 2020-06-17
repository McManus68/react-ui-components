import styled, { keyframes } from 'styled-components'

export const fadeUp = keyframes`
   0% {
    transform: translateY(4rem);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const scale = keyframes`
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const grow = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`

export const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
    opacity: 1;
  }
`

export const fadeDown = keyframes`
  0% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
