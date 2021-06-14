const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Fire Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>BRIGHTNESS: <strong>{ info.brightness }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox