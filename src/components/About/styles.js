import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -20px;
    
    

`
export const FotoWrapper = styled.div`
    height: 70vh;
    background: green ;
    width: 30%;
    margin-bottom: 20px;
`
export const FotoImg = styled.div`
    height: 100%;
    width: 100%;
`
export const AboutWrapper = styled.div`
    height: fit-content;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

`
export const Title = styled.div`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 50px;
    margin-top: -100px;
    text-decoration: underline;
    color: #1F9E69;
    z-index: 99999;
`
export const AboutContent = styled.div`
    padding: 25px;
    text-align: center;
    font-size: 18px;
    background-color: rgba(110,255,241,0.3);
    border: 2px solid #1F9E69;
    border-radius: 8px;
`