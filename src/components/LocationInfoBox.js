import React from 'react';

const LocationInfoBox = ({ info, setShowInfoBox }) => {
    return (
        <div className="location-info">
            <h2>Fire Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>BRIGHTNESS: <strong>{ info.brightness }</strong></li>
                <li>LATITUDE: <strong>{ info.lat }</strong></li>
                <li>LONGITUDE: <strong>{ info.lon }</strong></li>
            </ul>

            <button onClick={() => setShowInfoBox(false)}>x</button>
        </div>
    )
}

export default LocationInfoBox