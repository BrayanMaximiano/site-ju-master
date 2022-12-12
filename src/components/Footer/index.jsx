import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'
import { Container, Left, Right, SocialMedia } from './styles'

const index = () => {
  return (
    <Container>
        <Left>
          Juliana Fernandes Nutrição
        </Left>
        <Right>
          <SocialMedia>
          <InstagramLogo size={50} weight="bold" />
          <FacebookLogo size={50} weight="bold" />
          <LinkedinLogo size={50} weight="bold" />

          </SocialMedia>
        </Right>
    </Container>
  )
}

export default index
