import styled from 'styled-components'

export const Container = styled.div`
    height: 50px;
    width: 50px;
    background-color: #2a2a2a;
    border: 2px solid #1EE854;
    position: absolute;
    rotate: 45deg;
    z-index: 99;
    left: 48%;
    margin-top: -22px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            rotate: -45deg;
        }
        }
        
        @media (max-width:420px){
            left: 46%;
        }
`