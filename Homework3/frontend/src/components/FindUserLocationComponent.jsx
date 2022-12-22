// /*global google*/
  import { Link } from 'react-router-dom'
  import {
    useJsApiLoader,
  } from '@react-google-maps/api'
  import { useState } from 'react'
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
    const findClosest=(e)=>{
        e.preventDefault()
        const loc = {longitude,latitude,radius,category}
        console.log(loc)
        fetch("http://localhost:8080/place/closest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loc)
        }).then(
          window.location.pathname = "/closest"
        )
    }

    return (
      <div className='container'>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Find places in radius</h3>
            <div className="form-group mt-3">
              <label>Radius</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter radius"
                min={1}
                max={100}
                step={1}
                required
                onChange={changeRadius}
              />  
            </div>
            <div className="form-group mt-3">
              <label>Category</label>
              <select className='form-control mt-1' required 
                onChange={changeCategory}>
              <option value="Bar">Bar</option>
              <option value="Cafe">Cafe</option>
              <option value="Restaurant">Restaurant</option>
              </select>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type='submit' className='btn btn-primary' onClick={findClosest}>
                Find Closest
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
  
  export default FindUserLocationComponent