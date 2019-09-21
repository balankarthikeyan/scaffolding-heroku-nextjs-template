import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Portfolio } from '../components/portfolio'
import { GlobalStyled } from '../styles'

const HomePage = props => {
  const { title = 'BK' } = props

  return (
    <Layout title={title}>
      <GlobalStyled />
      <h1> {'Hello BK!!'}</h1>
    </Layout>
  )
}

export default HomePage
