import React from 'react'
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import { media } from '../../styles'
const Main = styled.div`
  position: absolute;
  z-index: 1;
  left: 320px;
  margin-left: 36px;
  ${media.phoneOrSmaller`
    margin-top: 60px;
    border-top: 10px solid #4B21FF;
    position: relative;
    left: unset;
    margin-left: unset;
    margin-bottom: 200px;
  `}
`

const StyledCarosel = styled(Carousel)`
  ${media.phoneOrSmaller`
    width: 100%;
  `}
  width: calc(100vw - 400px);
  height: 60vh;
  .carousel.carousel-slider {
    height: 100%;
    .slider-wrapper {
      height: 100%;
      ul {
        height: 100%;
      }
    }
  }
  .thumbs-wrapper {
    margin-top: 0px;
  }
`
const StyledImageKit = styled.div`
  height: 100%;

  img {
    width: auto !important;
    height: 100%;
  }
`
const StyledDescription = styled.p``

export { Main, StyledImageKit, StyledDescription, StyledCarosel }
