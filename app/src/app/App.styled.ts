import styled from '@emotion/styled'
import { BREAKPOINTS } from 'utils/style'

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 0 auto;
`

export const Header = styled.h1`
  @media ${BREAKPOINTS.MD.max} {
    margin-bottom: 3rem;
    text-align: center;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Footer = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: auto;
  text-align: center;
`
