import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Album cover of Loveless by My Bloody Valentine (1991)"
        src='../images/loveless.jpg'
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage