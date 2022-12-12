import React from 'react'
import { Button, Container, FormContainer, Input, TextArea, Title } from './styles'
import FormBackground from '/FormBackground.png'

const index = () => {
  return (
    <Container>
      <Title>Entre em contato e faça <br/> e faça uma avaliação</Title>
      <FormContainer>
        <Input placeholder='Nome'/>
        <Input placeholder='Email'/>
        <TextArea placeholder='Digite sua menssagem aqui ...'/>
        <Button> Enviar Mensagem</Button>
      </FormContainer>
    </Container>
  )
}

export default index
