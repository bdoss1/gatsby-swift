import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '@material-ui/core/Container'

const IndexPage = () => (
  <Layout>
    <Seo title="Kingz of the South Crowning the City" />
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
    <p>Block Party @ Kingz Blvd 8pm-2am</p>
    
    <h3>Saturday 8/14</h3>
    <p>Wet N Wild Day Party @ Aloft Downtown Dallas 1pm-6pm</p>
    <p>Royal Bash  @ Aloft Downtown Dallas 8pm-2am</p>
    <p>1033 Young St Dallas 75202</p>

    <h1 style={{textDecoration: "underline"}}>Places to go</h1>
    <ul>
      <li>African American Museum of Dallas - 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium - 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions - 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden - 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas - 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo - 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo - 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Places to go</h1>
    <ul>
      <li>African American Museum of Dallas - 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium - 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions - 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden - 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas - 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo - 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo - 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Places to go</h1>
    <ul>
      <li>African American Museum of Dallas - 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium - 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions - 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden - 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas - 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo - 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo - 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Places to go</h1>
    <ul>
      <li>African American Museum of Dallas - 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium - 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions - 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden - 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas - 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo - 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo - 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Places to go</h1>
    <ul>
      <li>African American Museum of Dallas - 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium - 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions - 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden - 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas - 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo - 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo - 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
  </Container>

</p>

  </Layout>
)

export default IndexPage
