import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 85vh;
 background-image: url('/FormBackground.png');
 background-position: center;
 background-size: cover;
 background-color: #1a1a1a;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction:column;
`
export const Title = styled.h1`
 font-size: 2.5rem;
 color: white;
 text-align: center;
 margin-bottom: 2rem;
`

export const FormContainer = styled.form`
 height: 60%;
 width: 30%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`

export const Input = styled.input`
 height: 56px;
 width: 100%;
 margin-bottom: 1.5rem;
 border-radius: 8px;
 background-color:#27d890;
 border: 2px solid #1ee854;
 color:white;
 padding:10px;
 font-size: 16px;

 ::placeholder{
    color:white;
 }
`
export const TextArea = styled.textarea`
 height: 8rem;
 width: 100%;
 margin-bottom: 1.5rem;
 border-radius: 8px;
 background-color:#27d890;
 border: 2px solid #1ee854;
 color:white;
 padding:10px;
 font-size:1rem;

 ::placeholder{
    color:white;
 }

`

export const Button = styled.button`
background-color:#27d890;
border: 2px solid #1ee854;
color:white;
height: 3.5rem;
border-radius: 8px;
padding: 10px;
width: 80%;
cursor: pointer;

::placeholder{
    color:white;
}

`