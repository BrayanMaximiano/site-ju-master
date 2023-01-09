import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #1F9E69;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`

export const Title = styled.h1`
    display: none;
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;


    @media (max-width: 420px){
    display: block;
    
 }
`

export const AddressContainer = styled.div`
 width: 100%;
 height: 100%;
 padding: 20px 60px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 @media (max-width: 420px){
    flex-direction: column;
    padding: 0;
 }
`
export const MapWrapper = styled.div`
 height: 25rem;
 width: 30rem;
 @media (max-width:420px){
    width: 100%;
    margin-bottom: 1rem;
 }
 `
export const AdressInfo = styled.div`
 color: white;
 height: 100%;
 width: 25rem;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 20px;

 @media (max-width:420px){
    font-size: 18px;
    width: 100%;
 }
 
`
export const LocationContainer = styled.div`

 display: flex;
 padding: 20px 60px;
 display: flex;
 align-items: center;
 justify-content: space-around;

 @media (max-width: 420px){
    display: none;
 }
`

export const InfoLocation = styled.div`
    height: 100%;
    width: 25rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
`
export const FotoWrapper = styled.div`
    height: 25rem;
    width: 30rem;
    background-color: black;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`