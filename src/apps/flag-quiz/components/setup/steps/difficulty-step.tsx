import React from 'react';
import { Difficulty } from '../../../data/quiz';
import { useSetup } from '../context/setup-context';
import styled from 'styled-components';
import { Title, Subtitle } from '../theme/title.styles';
import { ButtonGroup } from '../theme/button.styles';
import { SelectableButton } from '../theme/selectable-button';

const StyledSelectableButton = styled(SelectableButton)`
  margin: 0.5rem;
  max-width: 100%;
  
  @media (min-width: 768px) {
    min-width: 150px;
  }
`;

const ResponsiveButtonGroup = styled(ButtonGroup)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  width: 90%;
  max-width: 500px;
  margin: 1rem auto;
  
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const DifficultyStep: React.FC = () => {
  const { state, updateData } = useSetup();
  const selectedDifficulty = state.data.difficulty || Difficulty.Medium;
  
  const handleSelect = (difficulty: Difficulty) => {
    updateData('difficulty', difficulty);
  };
  
  // Function to get display name with first letter capitalized
  const getDifficultyDisplayName = (difficulty: Difficulty): string => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };
  
  // Function to get description for each difficulty level
  const getDifficultyDescription = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case Difficulty.Easy:
        return "3 options to choose from - perfect for beginners or casual play";
      case Difficulty.Medium:
        return "4 options to choose from - a balanced challenge for most players";
      case Difficulty.Hard:
        return "6 options to choose from - test your knowledge with more choices";
      default:
        return "";
    }
  };

  return (
    <StepContainer>
      <Title>Select Difficulty</Title>
      <ResponsiveButtonGroup>
        {Object.values(Difficulty).map((difficulty) => (
          <StyledSelectableButton
            key={difficulty}
            selected={selectedDifficulty === difficulty}
            onClick={() => handleSelect(difficulty)}
          >
            {getDifficultyDisplayName(difficulty)}
          </StyledSelectableButton>
        ))}
      </ResponsiveButtonGroup>
      
      {selectedDifficulty && (
        <Subtitle>{getDifficultyDescription(selectedDifficulty)}</Subtitle>
      )}
    </StepContainer>
  );
};
