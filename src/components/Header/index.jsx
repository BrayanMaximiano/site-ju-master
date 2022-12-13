import React from 'react'
import { Container,LogoWrapper, Logo, InfoWrapper } from './styles'
import LogoImg from '/logo.png'

const index = () => {
  return (
    <Container id='Header'>
        <LogoWrapper>
          <Logo src={LogoImg}/>
        </LogoWrapper>
        <InfoWrapper>
            <a href="#Home">Home</a>
            <a href="#About">Sobre</a>
            <a href="#Location">Localização</a>
            <a href="#Contact">Contato</a>
        </InfoWrapper>
    </Container>
  )
}

export default index