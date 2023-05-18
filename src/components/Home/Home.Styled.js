import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scale = keyframes`
0% {
    transform: scale(1.0);
}
50%{
    transform: scale(1.1);
}
100%{
    transform: scale(1.0);
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Text = styled.h2`
  margin-bottom: 10px;
`;

export const HeroImage = styled.img`
  animation: ${fadeIn} 1s ease-in;
`;

export const ButtonContainer = styled.div`
  animation: ${scale} 2s ease-in-out infinite;
  animation-delay: 2s;

  &:focus,
  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s ease-in-out;
`;
