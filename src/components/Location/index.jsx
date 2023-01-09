import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { Container, AddressContainer, MapWrapper, AdressInfo, LocationContainer, InfoLocation, FotoWrapper, Title} from './styles'

const index = () => {

  const containerStyle = {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  }
  const center = {
    lat: -23.48222995623555,
    lng:  -46.74118258698834
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey : "AIzaSyCpjUXIyHXqQa295NKE9wv5CqE6DT5_lgE"
  })
  return (
    <Container id='Location'>
        <AddressContainer>
        <Title > Localização</Title>
            <MapWrapper>
              {isLoaded ? (
                <GoogleMap mapContainerStyle ={containerStyle} center={center} zoom={15}>
                  <Marker position={center}/>
                </GoogleMap>
              ) : <></>}
            </MapWrapper>
            <AdressInfo>Estamos localizados na Avenida Agenor Couto de magalhães, no número 305</AdressInfo>
        </AddressContainer>
        <LocationContainer>
          <InfoLocation>O Consultório fica dentro da academia Projeto Life, na sala nos fundos</InfoLocation>
          <FotoWrapper>Foto Da Academia</FotoWrapper>
        </LocationContainer>
    </Container>
  )
}

export default index
