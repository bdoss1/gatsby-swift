import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="KOTS Dallas Information" />
    <center>
    <StaticImage
      src="../images/kingz_logo_small.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Kingz of the South"
      style={{ marginBottom: `1.45rem` }}
    />
    </center>
    
    <h1>Kingz of the South Dallas Weekend </h1>
  </Layout>
)

export default IndexPage
