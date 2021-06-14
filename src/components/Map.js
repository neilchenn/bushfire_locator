import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        return <LocationMarker key={index} lat={ev.latitude} lng={ev.longitude} onClick={() => setLocationInfo({ id: ev.id, brightness: ev.brightness })} />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDR7NAuUxV4xhEwwNDZ9DV62p4FGXnpmls' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: -33.8996,
        lng: 151.02536
    },
    zoom: 6
}

export default Map