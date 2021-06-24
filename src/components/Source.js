import React, { Component } from 'react';

export default class Source extends Component {
    render() {
        return (
            <div>
                <p>This app returns a list of fires from the 2019 - 2020 Australian fire season that were recorded by the MODIS (Moderate Resolution Imaging Spectroradiometer) satellite sensor.</p>
                <p>Link to API doc: <a href="https://australia-fire-api-dashboard.herokuapp.com/api/v1.0/docs">Visualising Australian Fires</a></p>
            </div>
        )
    }
}