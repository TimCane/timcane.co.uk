import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <ProgressBarContainer>
      <ProgressBarFill $progress={progress} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.surface};
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${colors.theme};
  transition: width 0.3s ease-in-out;
`;



export default ProgressBar;
