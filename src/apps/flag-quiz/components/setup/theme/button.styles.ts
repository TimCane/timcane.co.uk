import { colors } from "../../../theme/colors";
import styled from "styled-components";

interface ButtonProps {
  $color: string;
  $hoverColor: string;
  $activeColor: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.$color};
  color: ${colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.$hoverColor};
  }

  &:active {
    transform: scale(0.95);
    background-color: ${props => props.$activeColor};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;

export const ActionButton = styled.button<{
  $primary?: boolean;
}>`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: ${props => props.$primary ? colors.theme : colors.surface};
  color: ${colors.textPrimary};
  margin: 0.5rem;
  
  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.$primary ? colors.themeHover : colors.surface};
  }
  
  &:active {
    transform: scale(0.95);
    background-color: ${props => props.$primary ? colors.themeActive : colors.border};
  }
  
  &:disabled {
    background-color: ${colors.surface};
    color: ${colors.textDisabled};
    cursor: not-allowed;
    transform: none;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
`;
