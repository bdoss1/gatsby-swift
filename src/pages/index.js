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
    </center>

<p>
  <Container maxWidth="xs">
    <h1>Event Lineup</h1>
    
    <h3>Thursday 8/12</h3>
    <p>Bike Night @ Kingz Blvd 8pm-12am<br></br>KSU @ 12am headed to Aces of Dallas <br></br>2250 Manana Dr, Dallas, TX 75220</p>

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
      <li>African American Museum of Dallas <br></br> 3536 Grand Ave, Dallas, TX 75210</li>
      <li>The Dallas World Aquarium <br></br> 1801 N Griffin St, Dallas, TX 75202</li>
      <li>Museum of Illusions <br></br> 701 Ross Ave, Dallas, TX 75202</li>
      <li>The Dallas Arboretum and Botanical Garden <br></br> 8525 Garland Rd, Dallas, TX 75218</li>
      <li>Six Flags Over Texas <br></br> 2201 E Road to Six Flags St, Arlington, TX 76011</li>
      <li>Fort Worth Zoo <br></br> 1989 Colonial Pkwy, Fort Worth, TX 76110</li>
      <li>Dallas Zoo <br></br> 650 S R L Thornton Fwy, Dallas, TX 75203</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Hospitals</h1>
    <ul>
      <li>Baylor University Medical Center <br></br> 3305 Worth St, Dallas, TX 75246 – (214) 820-0111</li>
      <li>UT Southwestern Medical Center <br></br> 5323 Harry Hines Blvd, Dallas, TX 75390 – (214) 648-3111</li>
      <li>Parkland <br></br>5200 Harry Hines Blvd, Dallas, TX 75235  (214) 590-8000</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Shopping</h1>
    <ul>
      <li>Grand Prairie Premium Outlets <br></br> 2950 W Interstate 20, Grand Prairie, TX 75052</li>
      <li>Galleria Dallas <br></br> 13350 Dallas Pkwy, Dallas, TX 75240</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Cigarette/Cigars/Vapes</h1>
    <ul>
      <li>Blue Smoke of Dallas <br></br> 4560 W Mockingbird Ln UNIT 102, Dallas, TX 75209</li>
      <li>Wizards Vapor Bar & Smoke Shop <br></br> 3100 Main St, Dallas, TX 75226</li>
      <li>Live Oak Smoke Shop <br></br> 4102 Live Oak St, Dallas, TX 75204</li>
      <li>Puff n Stuff Smoke, Beer & Wine Shop <br></br> 4815 Columbia Ave, Dallas, TX 75226</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Liquor</h1>
    <ul>
      <li>Scott's Discount Liquor Beer and Wine <br></br> 969 Botham Jean Blvd, Dallas, TX 75202</li>
      <li>Stop N Save Liquors <br></br> 1907 S Cesar Chavez Blvd, Dallas, TX 75215</li>
      <li>Grand Avenue Liquors <br></br> 3032 Grand Ave, Dallas, TX 75215</li>
    </ul>
    <h1 style={{textDecoration: "underline"}}>Harley Davidson</h1>
    <ul>
      <li>Texas Harley-Davidson <br></br> 1 Texas Harley Way, Bedford, TX 76021</li>
      <li>Longhorn Harley-Davidson <br></br> 2830 W I-20, Grand Prairie, TX 75052</li>
      <li>Maverick Harley-Davidson <br></br> 1845 N, I-35E, Carrollton, TX 75006</li>
    </ul>
    
  </Container>

</p>

  </Layout>
)

export default IndexPage
