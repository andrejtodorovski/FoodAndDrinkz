  import {
    useJsApiLoader,
  } from '@react-google-maps/api'
  import { useState } from 'react'
  import MapNoRoute from '../MapNoRoute'
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw&callback=initMap"></script>
  function FindUserLocationComponent() {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw",
      libraries: ['places'],
    })
  
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [radius, setRadius] = useState('')
    const [category, setCategory] = useState('')
    const [boolean, setBoolean] = useState(false)
  
    async function findCoordinates() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            console.log(longitude,latitude)
          },
          () => {
            
          }
        );
      }
    }
    const changeRadius=(e)=>{
        e.preventDefault()
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            console.log(longitude,latitude)
          },
          () => {
            
          }
        );
      }
      setRadius(e.target.value)
    }
    const changeCategory=(e)=>{
      e.preventDefault()
      setCategory(e.target.value)
  }
  const handleBoolean=(e)=>{
    setBoolean(true);
  }
    const findClosest=(e)=>{
        e.preventDefault()
        const loc = {longitude,latitude,radius,category}
        fetch("http://localhost:8080/place/closest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loc)
        }).then(
          window.location.pathname = "/closest"
        )
    }

    return (
      <div className='topNavBarContainerDark pt-5'>
        <div className='d-flex flex-column text-center centerDiv ml-5 mr-5'>
        <form className="Auth-form" onSubmit={findClosest}>
        <h3 className="Auth-form-title text-white">Find places in radius</h3>
          <div className="Auth-form-content d-flex flex-row justify-content-between">
            <div className='d-flex flex-row'>
            <div className="form-group">
              <select className='form-control mt-1 borderRadiusBut' required 
                onChange={changeCategory}>
              <option value="Bar">Bar</option>
              <option value="Cafe">Cafe</option>
              <option value="Restaurant">Restaurant</option>
              </select>
            </div>
            <div className="form-group d-flex flex-row">
              <input
                type="number"
                className="form-control mt-1 borderRadiusBut ml-5 pl-3 pr-3"
                placeholder="Radius"
                min={1}
                max={100}
                step={1}
                required
                onChange={changeRadius}
                onClick={handleBoolean}
              />  
            </div>
            </div>
            <div>
              <button type='submit' className='btn grayBackgroundNoH borderRadiusBut'>
                Find closest from current location
              </button>
            </div>
          </div>
        </form>
      </div>
      {boolean && <MapNoRoute/>}
      </div>
    )
  }
  
  export default FindUserLocationComponent