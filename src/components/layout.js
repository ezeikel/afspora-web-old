/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBriefcase,
  faUsers,
  faClock,
  faBirthdayCake,
} from "@fortawesome/pro-light-svg-icons"
import GlobalStyle from "../GlobalStyle"

library.add(faBriefcase, faUsers, faClock, faUsers, faBirthdayCake)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
