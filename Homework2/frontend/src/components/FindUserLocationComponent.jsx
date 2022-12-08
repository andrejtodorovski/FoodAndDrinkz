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
  
    async function findCoordinates() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          },
          () => {
            
          }
        );
      }
    }
    const changeRadius=(e)=>{
        e.preventDefault()
        setRadius(e.target.value)
    }
    const findClosest=(e)=>{
        e.preventDefault()
        const loc = {longitude,latitude,radius}
        console.log(loc)
        // PlaceService.findClosest(loc);
        fetch("http://localhost:8080/place/closest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loc)
        })
    }

    return (
        <div className='container'>
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='70vh'
        w='67vw'
        margin='0'
      >
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
                <Input type='number' placeholder='Radius' onChange={changeRadius}/>
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
        <button type="button" class="btn btn-danger"><span><Link to="/closest">Show places in radius</Link></span></button>  
    </Flex>
      

      </div>
    )
  }
  
  export default FindUserLocationComponent