import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -20px;
    
    @media (max-width:420px){
        margin-top: -500px;
        margin-bottom: -150px;
        flex-direction: row-reverse;
}
    

`
export const FotoWrapper = styled.div`
    height: 70vh;
    background: green ;
    width: 30%;
    margin-bottom: 20px;

    @media (max-width:420px){
        background: transparent;
        position: absolute;
        width: 100%;
        height: 69%;
        right: 0;
    }
`
export const FotoImg = styled.img`
    height: 100%;
    width: 100%;
`
export const AboutWrapper = styled.div`
    height: 100vh;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    @media (max-width:420px){
        width: 100%;
        z-index: 2;
        

    }

`
export const Title = styled.div`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 50px;
    margin-top: -100px;
    text-decoration: underline;
    color: #1F9E69;
    z-index: 99999;

    @media (max-width:420px){
        text-align: center;
}
`
export const AboutContent = styled.div`
    padding: 25px;
    text-align: center;
    font-size: 18px;
    background-color: rgba(110,255,241,0.3);
    border: 2px solid #1F9E69;
    border-radius: 8px;

    @media (max-width: 420px) {
        margin-left: -20px;
        background: rgba(255, 255, 255, 0.3);
        font-size: 16px;
        border: none;
    }
`