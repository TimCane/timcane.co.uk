import React from 'react';
import { QuizMode } from '../../../data/quiz';
import { useSetup } from '../context/setup-context';
import { colors } from '../../../theme/colors';
import styled from 'styled-components';
import { Title, Subtitle } from '../theme/title.styles';
import { ButtonGroup, NavigationButtons, ActionButton } from '../theme/button.styles';
import { SelectableButton } from '../theme/selectable-button';

const StyledSelectableButton = styled(SelectableButton)`
  margin: 0.5rem;
  min-width: 200px;
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
  const { state, updateData, nextStep, prevStep } = useSetup();
  const selectedMode = state.data.mode || QuizMode.FlagToCountry;
  
  const handleSelect = (mode: QuizMode) => {
    updateData('mode', mode);
  };

  const getModeColor = (mode: QuizMode, state: "normal" | "hover" | "active" = "normal") => {
    // Use the same theme color for all modes
    switch (state) {
      case "hover":
        return colors.themeHover;
      case "active":
        return colors.themeActive;
      default:
        return colors.theme;
    }
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
      <ButtonGroup>
        {Object.values(QuizMode).map((mode) => (
          <StyledSelectableButton
            key={mode}
            selected={selectedMode === mode}
            onClick={() => handleSelect(mode)}
          >
            {getModeDisplayName(mode)}
          </StyledSelectableButton>
        ))}
      </ButtonGroup>
      
      {selectedMode && (
        <Subtitle>{getModeDescription(selectedMode)}</Subtitle>
      )}
      
      <NavigationButtons>
        <div></div> {/* Empty div for spacing */}
        <ActionButton $primary onClick={nextStep}>
          Next
        </ActionButton>
      </NavigationButtons>
    </StepContainer>
  );
};
