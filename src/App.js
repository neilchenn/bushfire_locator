import React from 'react';
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';



function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('http://australia-fire-api-dashboard.herokuapp.com/api/v1.0/fires_modis')
      const { result } = await res.json()

      setEventData(result)
      setLoading(false)
    }

/*
  useEffect(() => {
    window.localStorage.setItem("keepData"), 
  })
*/

    fetchEvents()
  }, [])

  return (
    <div>
      <NavbarComp />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;