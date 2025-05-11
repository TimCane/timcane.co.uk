import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export interface ProgressBarProps {
  progress: number; // Progress as a percentage (0-100)
  height?: number; // Height in pixels
  color?: string; // Override the default theme color
  className?: string; // Allow styled-components to extend this
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  height = 10, 
  color = colors.theme,
  className 
}) => {
  return (
    <ProgressBarContainer $height={height} className={className}>
      <ProgressBarFill $progress={progress} $color={color} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<{ $height: number }>`
  width: 100%;
  height: ${props => props.$height}px;
  background-color: ${colors.surface};
  border-radius: ${props => props.$height / 2}px;
  position: relative;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $progress: number; $color: string }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => props.$color};
  transition: width 0.3s ease-in-out;
`;

export default ProgressBar;
