import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
)

export default NotFoundPage
