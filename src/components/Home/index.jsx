import React from 'react'
import { Container, InfoWrapper, Title, Info, WaveContainer, Svg } from './styles'
import Wave from '/wave 1.svg'

const index = () => {
  return (
    <Container id='Home'>
      <InfoWrapper>
        <Title>Juliana Nutrição</Title>
        <Info>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe nulla ipsum molestias id optio eum sequi illum, quod voluptas dolores quibusdam repellat asperiores nisi dolore harum a exercitationem mollitia? Aut, blanditiis, deserunt dolorem praesentium sint illum doloremque natus sed inventore ea est quaerat. Hic facilis libero sit animi quisquam omnis consequuntur quidem iure eligendi, sequi corporis veritatis accusamus. Quis, optio cupiditate voluptatum asperiores eius aliquid reprehenderit, mollitia voluptas dicta rem quibusdam aspernatur voluptatibus distinctio id corrupti saepe ipsa? Corporis!</Info>
      </InfoWrapper>

      <WaveContainer>
        <Svg src={Wave}/>
      </WaveContainer>
        
    </Container>
  )
}

export default index