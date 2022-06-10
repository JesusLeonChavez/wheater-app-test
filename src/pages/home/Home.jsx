import React from 'react'

export default function Home() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=d6f11f82043f67847bb7327a6b572766`;
    return (
      <div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p className="city">Dallas</p>
            </div>
            <div className="temp">
              <h1 className="tempCity">60 °F</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>65 °F</p>
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              <p>12MPH</p>
            </div>
          </div>
        </div>
      </div>
    );
}
