import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../theme/colors';

const LoadingSplash: React.FC = () => {
  return (
    <SplashContainer>
      <Title>Flag Quiz</Title>
      <FlagContainer>
        <FlagPole />
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

const flagShadowAnimation = keyframes`
  0% { transform: translateX(5px) scaleX(0.95); opacity: 0.4; }
  25% { transform: translateX(0) scaleX(1); opacity: 0.5; }
  50% { transform: translateX(-5px) scaleX(0.98); opacity: 0.4; }
  75% { transform: translateX(0) scaleX(1); opacity: 0.5; }
  100% { transform: translateX(5px) scaleX(0.95); opacity: 0.4; }
`;

const waveAnimation = keyframes`
  0% {
    transform: perspective(500px) rotateY(-12deg) rotateX(3deg) rotateZ(0.5deg);
    filter: brightness(0.95);
  }
  20% {
    transform: perspective(500px) rotateY(-5deg) rotateX(-1deg) rotateZ(0.2deg);
    filter: brightness(1);
  }
  40% {
    transform: perspective(500px) rotateY(8deg) rotateX(2deg) rotateZ(-0.3deg);
    filter: brightness(0.98);
  }
  60% {
    transform: perspective(500px) rotateY(10deg) rotateX(4deg) rotateZ(-0.5deg);
    filter: brightness(0.97);
  }
  80% {
    transform: perspective(500px) rotateY(5deg) rotateX(0deg) rotateZ(0deg);
    filter: brightness(0.99);
  }
  100% {
    transform: perspective(500px) rotateY(-12deg) rotateX(3deg) rotateZ(0.5deg);
    filter: brightness(0.95);
  }
`;

const FlagContainer = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  margin-bottom: 2rem;
  perspective: 500px;
  overflow: visible;
  display: flex;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: 180px;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    filter: blur(5px);
    z-index: 0;
    animation: ${flagShadowAnimation} 4s ease-in-out infinite;
  }
`;

const FlagPole = styled.div`
  width: 8px;
  height: 180px;
  background: linear-gradient(to right, #8B4513, #A0522D, #8B4513);
  border-radius: 4px;
  position: relative;
  z-index: 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: -30px;
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background: #DAA520;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const AnimatedFlag = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #FF9800 0%,
    #FF9800 33.33%,
    #FFFFFF 33.33%,
    #FFFFFF 66.66%,
    #9C27B0 66.66%,
    #9C27B0 100%
  );
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${waveAnimation} 5s ease-in-out infinite;
  transform-origin: left center;
  position: relative;
  z-index: 1;
  margin-left: -4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 20%
    );
    border-radius: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.2) 80%
    );
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }
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
