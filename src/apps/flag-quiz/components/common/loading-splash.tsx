import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../theme/colors';

const LoadingSplash: React.FC = () => {
  return (
    <SplashContainer>
      <Title>Flag Quiz</Title>
      <FlagContainer>
        <AnimatedFlag />
      </FlagContainer>
      <LoadingText>Loading...</LoadingText>
    </SplashContainer>
  );
};

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  color: ${colors.textPrimary};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${colors.textPrimary};
  text-align: center;
`;

const waveAnimation = keyframes`
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`;

const FlagContainer = styled.div`
  width: 200px;
  height: 120px;
  margin-bottom: 2rem;
`;

const AnimatedFlag = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${colors.primary} 0%,
    ${colors.primary} 33.33%,
    ${colors.secondary} 33.33%,
    ${colors.secondary} 66.66%,
    ${colors.accent} 66.66%,
    ${colors.accent} 100%
  );
  border-radius: 8px;
  box-shadow: 0 4px 12px ${colors.shadow};
  animation: ${waveAnimation} 3s ease-in-out infinite;
  transform-origin: left center;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
`;

export default LoadingSplash;
