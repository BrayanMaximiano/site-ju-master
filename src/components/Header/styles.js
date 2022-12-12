import styled from "styled-components";

export const Container = styled.div`
  height: 20vh;
  width: 100%;
  border-bottom: 2px solid white;
  position: absolute;
  display: flex;
  background-color: rgba(26, 26, 26, 0.6);
`;

export const LogoWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items:center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 70%;
  height: 150%;
`;
export const InfoWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10%;

  a{
    color: white;
    text-decoration: none;
    margin-left: 20px;
    transition:all ease 0.5s;

    &:hover{
        text-decoration: underline;
        color: #cbd5e1;
    }
  }
`;
