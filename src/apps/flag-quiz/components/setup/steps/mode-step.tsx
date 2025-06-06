import React from 'react';
import { QuizMode } from '../../../data/quiz';
import { useSetup } from '../context/setup-context';
import styled from 'styled-components';
import { Title, Subtitle } from '../theme/title.styles';
import { ButtonGroup } from '../theme/button.styles';
import { SelectableButton } from '../theme/selectable-button';

const StyledSelectableButton = styled(SelectableButton)`
  margin: 0.5rem;
  max-width: 100%;
  
  @media (min-width: 768px) {
    min-width: 200px;
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

export const ModeStep: React.FC = () => {
  const { state, updateData } = useSetup();
  const selectedMode = state.data.mode || QuizMode.FlagToCountry;
  
  const handleSelect = (mode: QuizMode) => {
    updateData('mode', mode);
  };

  const getModeDescription = (mode: QuizMode): string => {
    switch (mode) {
      case QuizMode.FlagToCountry:
        return "You'll see a flag and need to identify the country";
      case QuizMode.CountryToFlag:
        return "You'll see a country name and need to identify its flag";
      case QuizMode.CountryToContinent:
        return "You'll see a country name and need to identify which continent it belongs to";
      default:
        return "";
    }
  };

  const getModeDisplayName = (mode: QuizMode): string => {
    switch (mode) {
      case QuizMode.FlagToCountry:
        return "Flag to Country";
      case QuizMode.CountryToFlag:
        return "Country to Flag";
      case QuizMode.CountryToContinent:
        return "Country to Continent";
      default:
        return mode;
    }
  };

  return (
    <StepContainer>
      <Title>Select Quiz Mode</Title>
      <ResponsiveButtonGroup>
        {Object.values(QuizMode)
          // Filter out the CountryToContinent mode
          .filter(mode => mode !== QuizMode.CountryToContinent)
          .map((mode) => (
            <StyledSelectableButton
              key={mode}
              selected={selectedMode === mode}
              onClick={() => handleSelect(mode)}
            >
              {getModeDisplayName(mode)}
            </StyledSelectableButton>
          ))}
      </ResponsiveButtonGroup>
      
      {selectedMode && (
        <Subtitle>{getModeDescription(selectedMode)}</Subtitle>
      )}
    </StepContainer>
  );
};
