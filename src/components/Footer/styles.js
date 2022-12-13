import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 30vh;
    background-color: #2a2a2a;
    border-top: 2px solid #1EE854;
    display: flex;
    justify-content: center;
    align-items: center ;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color:#808080;
`
export const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808080;
`
export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

   a{
    color: #808080;
    text-decoration: none;
    margin-left: 1.5rem;
    transition: all ease 0.5s;
    &:hover{
        color: darkgray;
    }
    }
`