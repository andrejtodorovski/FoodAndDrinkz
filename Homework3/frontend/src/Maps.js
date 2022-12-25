import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  
  import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState, useEffect } from 'react'
  import "./styles/TopNavBarComponent.css"
  

  
  function Maps({or, dr}) {
    
    const [ libraries ] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw',
      libraries
    })
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [originUser, setOrigin] = useState('')
    const [boolean, setBoolean] = useState(true)
    const [center, setCenter] = useState()
    const [routeFound, setRouteFound] = useState(false)
    const [markerPosition, setMarkerPosition] = useState()

    const changeOrg=(e)=>{
      e.preventDefault()
      setOrigin(e.target.value)
    }
  
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
    useEffect(() => {
      if (navigator.geolocation && boolean) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setOrigin(position.coords.latitude + " " + position.coords.longitude)
            setBoolean(false)
            setCenter({ lat: parseFloat(dr.split(" ")[0]), lng: parseFloat(dr.split(" ")[1]) })
            if(routeFound==false){
              setMarkerPosition({ lat: parseFloat(dr.split(" ")[0]), lng: parseFloat(dr.split(" ")[1]) })
            }
            else{
              setMarkerPosition(null)
            }
            // console.log(originUser)  
          },
          () => {
            
          }
        );
      }
      });
    async function calculateRoute() {
      // if (originRef.current.value === '' || destiantionRef.current.value === '') {
      //   return
      // }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      console.log(dr)
      const results = await directionsService.route({
        // origin: originRef.current.value,
        // destination: destiantionRef.current.value,
        // origin: originRef.current.value,
        
        origin: originUser,
        destination: dr,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
      setRouteFound(true)
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      // destiantionRef.current.value = ''
    }
  
    return (
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='70vh'
        w='70vw'
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%' className='ml-5 mt-5 mapPadding pb-5'>
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            
            <MarkerF position={markerPosition}/>
            
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='1'  
          className='mt-5 mapPadding'
        >
          <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <div>From:</div>
              <Autocomplete>
                <Input type='text' placeholder='Origin' ref={originRef} value={originUser} onChange={changeOrg}/>
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <div>To:</div>
              <Autocomplete>
                <Input
                  type='text'
                  placeholder='Destination'
                  value={dr}
                  ref={destiantionRef}
                />
              </Autocomplete>
            </Box>
  
            <ButtonGroup className='mt-4'>
              <Button colorScheme='pink' type='submit' onClick={calculateRoute} className='ml-2'>
                Calculate Route
              </Button>
              <Button colorScheme='pink' type='submit' onClick={clearRoute} className='ml-2'>
                Clear Route
              </Button>
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent='space-around'>
            <div>Distance: {distance} </div>
            <div>Duration: {duration} </div>
          </HStack>
        </Box>
      </Flex>
    )
  }
  
  export default Maps