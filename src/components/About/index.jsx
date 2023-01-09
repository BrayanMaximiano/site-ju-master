import React from 'react'
import FotoJu from '/fotoju.png'
import { AboutContent, AboutWrapper, Container, FotoImg, FotoWrapper, Title } from './styles'

const index = () => {
  return (
    <Container id='About'>
        <FotoWrapper>
            <FotoImg src={FotoJu}/>
        </FotoWrapper>
        <AboutWrapper>
            <Title>Sobre</Title>
            <AboutContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi tenetur reiciendis, cumque itaque repellendus explicabo dolorem beatae fugiat doloremque sed minima quam perspiciatis accusantium. Eveniet delectus aut aliquid voluptates repudiandae assumenda ipsa! Distinctio, soluta adipisci, atque delectus voluptatibus dolorum beatae sequi, odio porro veniam ullam amet? Sit, fuga? Illo!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime commodi tenetur reiciendis, cumque itaque repellendus explicabo dolorem beatae fugiat doloremque sed minima quam perspiciatis accusantium. Eveniet delectus aut aliquid voluptates repudiandae assumenda ipsa! Distinctio, soluta adipisci, atque delectus voluptatibus dolorum beatae sequi, odio porro veniam ullam amet? Sit, fuga? Illo!
            </AboutContent>
        </AboutWrapper>
    </Container>
  )
}

export default index