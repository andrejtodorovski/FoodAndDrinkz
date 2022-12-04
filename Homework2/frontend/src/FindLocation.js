// /*global google*/
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  Input,
} from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  // Autocomplete,
  // DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

function FindLocation() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw",
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [center, setCenter] = useState({ lat: 42, lng: 21.5 })

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  // if (!isLoaded) {
  //   return <SkeletonText />
  // }

  async function findCoordinates() {
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          setCenter({lat: position.coords.latitude, lng:position.coords.longitude})
        },
        () => {
          
        }
      );
    }
  }
  const findClosest=(e)=>{
    e.preventDefault()
    const loc = {longitude,latitude}
    console.log(loc)
    fetch("http://localhost:8080/home/show",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(loc)
    })
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='70vh'
      w='67vw'
      margin='0 0 200px 250px'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
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
          <Marker position={center} />
          
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
      >
        <HStack spacing={2} justifyContent='space-between'>
          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={findCoordinates}>
              Find My Location
            </Button>  
          </ButtonGroup>
        </HStack>
        <HStack spacing={2} mt={4} justifyContent='space-between'>
            <Text>Longitude: {longitude} </Text>
        </HStack>
        <HStack spacing={2} mt={4} justifyContent='space-between'>
            <Text>Latitude: {latitude} </Text>
        </HStack>
        <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <Input type='text' placeholder='Radius'/>
            </Box>
            <Box flexGrow={1}>
              <ButtonGroup>
                <Button colorScheme='pink' type='submit' onClick={findClosest}>
                  Find places
                </Button>
              </ButtonGroup>
            </Box>
          </HStack>
      </Box>
    </Flex>
  )
}

export default FindLocation