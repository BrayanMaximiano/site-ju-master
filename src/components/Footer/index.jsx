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
            <a href="www.instagram.com"><InstagramLogo size={50} weight="bold" /></a>
          <a href="www.facebook.com"><FacebookLogo size={50} weight="bold" /></a>
          <a href="www.linkedin.com"><LinkedinLogo size={50} weight="bold" /></a>

          </SocialMedia>
        </Right>
    </Container>
  )
}

export default index
