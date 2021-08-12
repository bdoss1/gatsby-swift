import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '@material-ui/core/Container'

const IndexPage = () => (
  <Layout>
    <Seo title="KOTS Dallas Crowning the City" />
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
    <h1>Event Lineup</h1>
    
    <h3>Thursday 8/12</h3>
    <p>Bike Night @ Kingz Blvd 8pm-12am</p>

    <StaticImage
      src="../images/bikenight.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Kingz of the South"
      style={{ marginBottom: `1rem` }}
    />
   

   
    
    <h3>Friday 8/13</h3>
    <p>Block Party 8pm-2am</p>
    <p>2617 Martin Luther King Blvd</p>
    <h3>Saturday 8/14</h3>
    <p>Wet N Wild Day Party 1pm-6pm</p>
    <p>1033 Young St Dallas 75202</p>
    <h3>Saturday 8/14</h3>
    <p>Royal Bash  8pm-2am</p>
    <p>1033 Young St Dallas 75202</p>
  </Container>
</p>

  </Layout>
)

export default IndexPage
