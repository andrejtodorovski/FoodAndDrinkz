import Maps from '../Maps'
import {
  useJsApiLoader,
} from '@react-google-maps/api'
import { useState, useEffect} from 'react'
import PlaceService from '../services/PlaceService';
import '../styles/TopNavBarComponent.css'
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw&callback=initMap"></script>
function PlaceComponentWithRoute() {
    
    const [ libraries ] = useState(['places']);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw",
    libraries
  })

  const [haveData, setData] = useState(false)
  const [place, setPlace] = useState('')
  const [isClick, setClicked] = useState('')
  const [isLogged, setLogged] = useState()
  const [isFetched, setFetched] = useState(false)

  useEffect(() => {
    if(haveData===false){
    PlaceService.getPlace(window.location.pathname.substring(1)).then(res => {
        setPlace(res.data);
    });
    setData(true);
    }
        if(isFetched===false){
            fetch("http://localhost:8080/user/check",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then((response)=>
        response.json()
        ).then((user)=>{
        if(user.status!==406){
            setLogged(false)
        }
        else{
            setLogged(true)
        }
        })
        }
    });
    
  const isClicked=(e)=>{
    e.preventDefault()
    setClicked(true)
}
const addFavorites=(e)=>{
    e.preventDefault()
    let id = window.location.pathname.substring(1);
    PlaceService.addPlaceToFavorites(window.location.pathname.substring(1)).then(
        alert("Succesfully added to favorites")
    );
}

    return (
        <div className='grayBackground p-5'>
            <div className='d-flex ml-5 whiteBackground'>
                <div className='width50 ml-5 mb-3'>
                    <h1 className='mt-3'>{place.name}</h1>
                    <div className='d-flex'>
                        <div><img className='icon mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png' alt=''></img></div>
                        <div><h5 className='textDarkGray'>{place.rating}</h5></div>
                    </div>
                    <div className='d-flex justify-content-between flex-column'>
                        <div><span className='textMaroon font-weight-bold'>Review count: </span><span>{place.reviewCount}</span></div>
                        <div className='d-flex'><span><button className='btn redBut text-white borderRadiusBut styleRoute mr-5' onClick={isClicked}>
                            <img className="icon2 mr-2" src='https://cdn-icons-png.flaticon.com/512/3061/3061732.png' alt='mapIcon'></img>
                            Show on map
                            </button></span>
                            {!isLogged && <>
                            <span><button className='btn blueBackground text-white borderRadiusBut styleRoute mr-5 pr-3' onClick={addFavorites}>
                            <img className="icon mr-1" src='https://cdn-icons-png.flaticon.com/512/4208/4208420.png' alt='favoritesIcon'></img>
                            Add to favorites
                            </button></span>
                            </>}
                            </div>
                    </div>
                    <div>
                        <span className='textMaroon font-weight-bold'>Phone number: </span>
                        <span>{place.phoneNumber}</span>
                    </div>
                    <div>
                        <span className='textMaroon font-weight-bold'>Address: </span>
                        <span>{place.address}</span>
                    </div>
                    <div>
                        <span className='textMaroon font-weight-bold'>Hours:</span>
                        <div className='d-flex flex-column'>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray  font-weight-bold'>Monday</span>
                                <span className='flexGrowOne'>{place.monday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Tuesday</span>
                                <span className='flexGrowOne'>{place.tuesday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Wednesday</span>
                                <span className='flexGrowOne'>{place.wednesday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Thursday</span>
                                <span className='flexGrowOne'>{place.thursday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Friday</span>
                                <span className='flexGrowOne'>{place.friday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Saturday</span>
                                <span className='flexGrowOne'>{place.saturday}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='flexGrowOne textDarkGray font-weight-bold'>Sunday</span>
                                <span className='flexGrowOne'>{place.sunday}</span>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='fitAll'>
                    <img className='fitAll imgHeight100' src={place.imgUrl} alt={place.name}></img>
                </div>
            </div>
            {isLoaded && isClick && <Maps
                dr = {place.latitude + " " + place.longitude}
            />}
        </div>
    );
}

export default PlaceComponentWithRoute