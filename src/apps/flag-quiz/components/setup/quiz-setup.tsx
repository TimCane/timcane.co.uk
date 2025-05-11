import React, { useEffect } from 'react';
import { SetupProvider, useSetup } from './context/setup-context';
import { steps } from './config/steps';
import ProgressBar from './components/progress-bar';
import styled from 'styled-components';
import type { QuizSetupData } from './types';
import { colors } from '../../theme/colors';
import { Continent } from '../../data/countries';
import { NavigationButtons, ActionButton } from './theme/button.styles';

interface QuizSetupProps {
  onComplete: (data: QuizSetupData) => void;
  userContinent?: Continent;
}

const QuizSetupContent: React.FC<{ onComplete: (data: QuizSetupData) => void; userContinent?: Continent }> = ({ onComplete }) => {
  const { state, isComplete, nextStep, prevStep, updateData } = useSetup();
  const CurrentStep = steps[state.currentStep]?.component;
  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === steps.length - 1;

  useEffect(() => {
    if (isComplete) {
      onComplete(state.data as QuizSetupData);
    }
  }, [isComplete, state.data, onComplete]);

  // Handle the next button click
  const handleNextClick = () => {
    // If it's the last step, complete the setup
    if (isLastStep) {
      // Make sure the question count is saved
      if (state.data.questionCount) {
        updateData('questionCount', state.data.questionCount);
      }
      // Move to the final step which will trigger the onComplete callback
      nextStep();
    } else {
      // Otherwise, just go to the next step
      nextStep();
    }
  };

  // Determine if the next button should be disabled based on the current step
  const isNextDisabled = () => {
    // For continents step, disable if no continents are selected
    if (state.currentStep === 0) {
      return !state.data.continents || state.data.continents.length === 0;
    }
    return false;
  };

  return (
    <Container>
      <ProgressBar currentStep={state.currentStep} totalSteps={steps.length} />
      <StepContainer>
        {CurrentStep && <CurrentStep />}
        <NavigationButtons>
          <ActionButton 
            onClick={prevStep} 
            style={{ visibility: isFirstStep ? 'hidden' : 'visible' }}
          >
            Back
          </ActionButton>
          <ActionButton 
            $primary 
            onClick={handleNextClick}
            disabled={isNextDisabled()}
          >
            {isLastStep ? 'Start Quiz' : 'Next'}
          </ActionButton>
        </NavigationButtons>
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
  padding: 0 20px;
`;

export default QuizSetup;
