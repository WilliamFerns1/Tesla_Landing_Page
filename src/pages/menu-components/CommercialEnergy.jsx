import { useLoaderData } from "react-router-dom"
import commercialVideo from "/videos/commercial.mp4"

export function loader() {
  return (

    <div className="commercial-energy">
      <video src={commercialVideo} autoPlay muted loop></video>
      <div className="top-section">
        <h2 style={{color: "white", fontSize: "2.3rem"}} >Commercial Energy</h2>
      </div>
      <div className="bottom-container">
        <div className="bottom-card">

          <div style={{margin: "0px"}} className="bottom-middle-section">
              <div className="bottom-middle-section-item">
                <h4>65+</h4>
                <p style={{color: "white", fontSize: "0.6rem", marginTop: "7px"}}>Countries With</p>
                <p style={{color: "white", fontSize: "0.6rem"}}>Industrial Installations</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>10 GWh+</h4>
                <p style={{color: "white", fontSize: "0.6rem", marginTop: "7px"}}>Deployed</p>
                <p style={{color: "white", fontSize: "0.6rem"}}>Storage</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>1,500+</h4>
                <p style={{color: "white", fontSize: "0.6rem", marginTop: "7px"}}>Industrial Sites</p>
                <p style={{color: "white", fontSize: "0.6rem"}}>in Operation</p>
              </div>
              <div className="bottom-middle-section-item roof-button-container">
                <a style={{padding: "7px 50px", fontWeight: "bold"}} href="#">Contact Us</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CommercialEnergy() {
  const commercialEnergy = useLoaderData()
  return (
    <>
      {commercialEnergy}
    </>
  )
}