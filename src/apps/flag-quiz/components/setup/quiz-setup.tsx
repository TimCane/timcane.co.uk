import React, { useEffect } from 'react';
import { SetupProvider, useSetup } from './context/setup-context';
import { steps } from './config/steps';
import ProgressBar from './components/progress-bar';
import styled from 'styled-components';
import type { QuizSetupData } from './types';
import { colors } from '../../theme/colors';
import { Continent } from '../../data/countries';

interface QuizSetupProps {
  onComplete: (data: QuizSetupData) => void;
  userContinent?: Continent;
}

const QuizSetupContent: React.FC<{ onComplete: (data: QuizSetupData) => void; userContinent?: Continent }> = ({ onComplete }) => {
  const { state, isComplete } = useSetup();
  const CurrentStep = steps[state.currentStep]?.component;

  useEffect(() => {
    if (isComplete) {
      onComplete(state.data as QuizSetupData);
    }
  }, [isComplete, state.data, onComplete]);

  return (
    <Container>
      <ProgressBar currentStep={state.currentStep} totalSteps={steps.length} />
      <StepContainer>
        {CurrentStep && <CurrentStep />}
      </StepContainer>
    </Container>
  );
};

const QuizSetup: React.FC<QuizSetupProps> = ({ onComplete, userContinent }) => {
  return (
    <SetupProvider initialContinent={userContinent}>
      <QuizSetupContent onComplete={onComplete} userContinent={userContinent} />
    </SetupProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1a1a1a;
  color: ${colors.textPrimary};
  padding: 20px;
  box-sizing: border-box;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
`;

export default QuizSetup;
