import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/bg.jpg");
  background-position: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  height: 20rem;
  width: 40rem;
  background-color: rgba(26, 26, 26, 0.6);
  border-radius: 8px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 20px;
`;
export const Info = styled.p`
  color: white;
  text-align: center;
`;
export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin-bottom: -5px;
`;
export const Svg = styled.img`
  height: 100%;
  width: 100%;
`;
