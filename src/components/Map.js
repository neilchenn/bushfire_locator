import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [showInfoBox, setShowInfoBox] = useState(false)

   
    const markers = eventData.map((ev) => {
        return <LocationMarker lat={ev.latitude} lng={ev.longitude} onClick={() => {
                setLocationInfo({ 
                    id: ev.id, 
                    brightness: ev.brightness, 
                    lat: ev.latitude, 
                    lon: ev.longitude  
                })
                setShowInfoBox(true)
            }
        }  />
    })

    const displayInfoBox = () => {
        return showInfoBox && locationInfo ? <LocationInfoBox setShowInfoBox={setShowInfoBox} info={locationInfo}/> : null
    }

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDR7NAuUxV4xhEwwNDZ9DV62p4FGXnpmls' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {displayInfoBox()}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: -25.1000,
        lng: 133.8807
    },
    zoom: 5
}

export default Map