import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Countries from "../components/countries"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Countries />
  </Layout>
)

export default IndexPage
