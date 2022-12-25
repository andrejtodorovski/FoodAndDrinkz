import {
    Box,
    Flex,
  } from '@chakra-ui/react'  
  import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
  } from '@react-google-maps/api'
  import { useState, useEffect } from 'react'
  

  const center = {lat: 41, lng: 21}
  function Maps() {
    
    const [ libraries ] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw',
      libraries
    })
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [boolean, setBoolean] = useState(true)
    const [center, setCenter] = useState()

    useEffect(() => {
      if (navigator.geolocation && boolean && isLoaded) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setBoolean(false)
            setCenter({ lat: position.coords.latitude, lng: position.coords.longitude})
          },
          () => {
            
          }
        );
      }
      });

  
  
    return (
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='70vh'
        w='70vw'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='86%' className='mr-5 ml-5 mb-5'>
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '90%', height: '90%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            
            <MarkerF position={center}/>
          </GoogleMap>
        </Box>
      </Flex>
    )
  }
  
  export default Maps