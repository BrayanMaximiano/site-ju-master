import React from 'react'
import { Container, AddressContainer, MapWrapper, AdressInfo, LocationContainer, InfoLocation, FotoWrapper} from './styles'

const index = () => {
  return (
    <Container>
        <AddressContainer>
            <MapWrapper>Mapa aqui</MapWrapper>
            <AdressInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos ipsam aut voluptas vel aspernatur animi alias cumque eveniet exercitationem, voluptates aliquam necessitatibus! Vitae eaque atque explicabo officia porro molestiae.</AdressInfo>
        </AddressContainer>
        <LocationContainer>
          <InfoLocation>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt cumque adipisci, vel enim quidem aliquam sapiente perferendis, cum minus nulla possimus esse corrupti reiciendis consequuntur magni officiis optio eos.</InfoLocation>
          <FotoWrapper>Foto Da Academia</FotoWrapper>
        </LocationContainer>
    </Container>
  )
}

export default index
