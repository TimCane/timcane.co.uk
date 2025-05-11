import React, { useState, useEffect } from 'react';
import { useSetup } from '../context/setup-context';
import { colors } from '../../../theme/colors';
import styled from 'styled-components';
import { Title, Subtitle } from '../theme/title.styles';
import { NavigationButtons, ActionButton } from '../theme/button.styles';
import { getCountriesForContinents } from '../../../data/countries';

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const QuestionCountStep: React.FC = () => {
  const { state, updateData, nextStep, prevStep } = useSetup();
  const [maxCountries, setMaxCountries] = useState(50);
  const [sliderValue, setSliderValue] = useState(
    state.data.questionCount <= 0 ? 10 : state.data.questionCount || 10
  );
  
  // Calculate the maximum number of countries based on selected continents
  useEffect(() => {
    if (state.data.continents && state.data.continents.length > 0) {
      const countriesCount = getCountriesForContinents(state.data.continents).length;
      setMaxCountries(countriesCount);
      
      // If current question count is higher than available countries, adjust it
      // unless it's the endless mode value
      if (sliderValue > countriesCount && sliderValue !== -1) {
        setSliderValue(countriesCount);
        updateData('questionCount', countriesCount);
      }
    }
  }, [state.data.continents]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    updateData('questionCount', value);
  };

  const handleSubmit = () => {
    updateData('questionCount', sliderValue);
    nextStep();
  };
  
  // Generate tick marks for the slider
  const tickMarks = [];
  // Create tick marks at intervals of 5 or 10 depending on max countries
  const interval = maxCountries > 50 ? 10 : 5;
  for (let i = 0; i <= maxCountries; i += interval) {
    tickMarks.push({ value: i });
  }

  return (
    <StepContainer>
      <Title>Number of Questions</Title>
      
      <SliderContainer>
        <SliderLabel>
          <span>1</span>
          <span>{maxCountries}</span>
        </SliderLabel>
        <Slider 
          type="range" 
          min={1} 
          max={maxCountries} 
          step={1}
          value={sliderValue}
          onChange={handleChange}
        />
        <TickLabels>
          {tickMarks.map((mark, index) => {
            // Calculate position as percentage
            const position = (mark.value / maxCountries) * 100;
              
            // Only show some labels to avoid crowding
            if (index % 2 === 0) {
              return (
                <TickLabel 
                  key={mark.value} 
                  style={{ left: `${position}%` }}
                >
                  {mark.value}
                </TickLabel>
              );
            }
            return null;
          })}
        </TickLabels>
      </SliderContainer>
      
      <SliderValue>
        {`${sliderValue} question${sliderValue !== 1 ? 's' : ''}`}
      </SliderValue>
      
      <Subtitle>
        Select how many questions you want in your quiz.
      </Subtitle>
      
      <NavigationButtons>
        <ActionButton onClick={prevStep}>
          Back
        </ActionButton>
        <ActionButton $primary onClick={handleSubmit}>
          Start Quiz
        </ActionButton>
      </NavigationButtons>
    </StepContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  margin: 1.5rem 0;
  
  @media (min-width: 768px) {
    margin: 2rem 0;
  }
`;

const SliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${colors.textSecondary};
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background: ${colors.border};
  outline: none;
  margin: 0.75rem 0;
  
  @media (min-width: 768px) {
    height: 8px;
    margin: 1rem 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.theme};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${colors.themeHover};
      transform: scale(1.1);
    }
    
    &:active {
      background: ${colors.themeActive};
    }
  }
  
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.theme};
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${colors.themeHover};
      transform: scale(1.1);
    }
    
    &:active {
      background: ${colors.themeActive};
    }
  }
`;

const SliderValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0.75rem 0;
  color: ${colors.theme};
  
  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 1rem 0;
  }
`;

// Using Subtitle component from theme/title.styles.ts instead

const EndlessOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const EndlessCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  accent-color: ${colors.theme};
`;

const EndlessLabel = styled.label`
  font-size: 1.2rem;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

// Removed unused styled components

const TickLabels = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  margin-bottom: 1rem;
`;

const TickLabel = styled.div`
  position: absolute;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: ${colors.textSecondary};
  
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
