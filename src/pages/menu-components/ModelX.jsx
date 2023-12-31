import { useLoaderData } from "react-router-dom"
import modelXVideo from "/videos/model-x.mp4"

export function loader() {
  return (
    <div className="model-x">
      <video src={modelXVideo} autoPlay muted loop></video>
      <div className="top-section">
        <div className="top-section-card">
          <h3>Model X</h3>
          <h4>From $68,590*</h4>
          <p>After Federal Tax Credit & Est. Gas Savings</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-card">
          <div className="bottom-middle-section">
            <div className="middle-section-items">
              <div className="bottom-middle-section-item">
                <h4>333mi</h4>
                <p>Range (EPA est.)</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>2.5s</h4>
                <p>0-60 mph*</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>9.9s</h4>
                <p>1/4 Mile</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>1,020 hp</h4>
                <p>Peak Power</p>
              </div>
            </div>
            <div className="bottom">
              <a href="#">Order Now</a>
            </div>
          </div>
          <div className="bottom-section">
            <p>*Price before savings is $74,990, excluding taxes and fees. Subject to change.</p>
            <p><a href="#">Learn about est. gas savings.</a></p>
            <p>Specs displayed are Model S Plaid values.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModelX() {
  const modelX = useLoaderData();
  return <>{modelX}</>;
}