import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  color: ${colors.textPrimary};
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.textPrimary};
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${colors.textSecondary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 800px;
`;

export const Button = styled.button<{
  $color: string;
  $hoverColor: string;
  $activeColor: string;
  $selected?: boolean;
}>`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.$selected ? props.$activeColor : props.$color};
  color: ${colors.textPrimary};
  min-width: 150px;
  
  &:hover {
    background-color: ${props => props.$hoverColor};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${colors.shadow};
  }
  
  &:active {
    background-color: ${props => props.$activeColor};
    transform: translateY(0);
    box-shadow: 0 2px 4px ${colors.shadow};
  }
`;

export const ActionButton = styled.button<{
  $primary?: boolean;
}>`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.$primary ? colors.theme : colors.surface};
  color: ${colors.textPrimary};
  margin: 0.5rem;
  
  &:hover {
    background-color: ${props => props.$primary ? colors.theme : colors.themeHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${colors.shadow};
  }
  
  &:active {
    background-color: ${props => props.$primary ? colors.theme : colors.border};
    transform: translateY(0);
    box-shadow: 0 2px 4px ${colors.shadow};
  }
  
  &:disabled {
    background-color: ${colors.surface};
    color: ${colors.textDisabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Card = styled.div`
  background-color: ${colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 4px 8px ${colors.shadow};
  width: 100%;
  max-width: 800px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const CheckboxLabel = styled.label`
  font-size: 1.1rem;
  cursor: pointer;
`;

// Progress bar components have been moved to components/common/progress-bar.tsx
