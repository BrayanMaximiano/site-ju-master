import React from 'react'
import { Container,LogoWrapper, Logo, InfoWrapper } from './styles'
import LogoImg from '/logo.png'

const index = () => {
  return (
    <Container>
        <LogoWrapper>
          <Logo src={LogoImg}/>
        </LogoWrapper>
        <InfoWrapper>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Localização</a>
            <a href="#">Contato</a>
        </InfoWrapper>
    </Container>
  )
}

export default index