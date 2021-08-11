import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '@material-ui/core/Container'

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
  
    <h1>Welcome</h1>
    </center>

<p>
  <Container maxWidth="xs">
    test
  </Container>
</p>

  </Layout>
)

export default IndexPage
