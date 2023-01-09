import styled from "styled-components";

export const Container = styled.div`
  height: 20vh;
  width: 100%;
  border-bottom: 2px solid white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 26, 26, 0.6);

  @media (max-width:420px){
  height: 15vh;
}
  
`;

export const LogoWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items:center;
  justify-content: center;

  @media (max-width:420px){
    height: 80%;

  }
`;
export const Logo = styled.img`
  width: 70%;
  height: 150%;
  @media (max-width:420px){
      height: 100%;
      width: 100%;
    }
`;
export const InfoWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10%;
  
  @media (max-width:420px){
      padding-left: 0;
    }
    

  a{
    color: white;
    text-decoration: none;
    margin-left: 20px;
    transition:all ease 0.5s;

    @media (max-width:420px){
      margin-left: 10px;
    }
    @media (max-width:375px){
      font-size: 16px;
    }
    

    &:hover{
        text-decoration: underline;
        color: #cbd5e1;
    }
  }
`;
