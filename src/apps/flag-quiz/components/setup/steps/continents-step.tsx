import React from 'react';
import { Continent } from '../../../data/countries';
import { useSetup } from '../context/setup-context';
import styled from 'styled-components';
import { Title } from '../theme/title.styles';
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

export const ContinentsStep: React.FC = () => {
  const { state, toggleContinent } = useSetup();
  const selectedContinents = state.data.continents || [];
  
  const handleContinentToggle = (continent: Continent) => {
    toggleContinent(continent);
  };

  return (
    <StepContainer>
      <Title>Select Continents</Title>
      <ResponsiveButtonGroup>
        {Object.values(Continent).map((continent) => (
          <StyledSelectableButton
            key={continent}
            selected={selectedContinents.includes(continent)}
            onClick={() => handleContinentToggle(continent)}
          >
            {continent}
          </StyledSelectableButton>
        ))}
      </ResponsiveButtonGroup>
    </StepContainer>
  );
};
