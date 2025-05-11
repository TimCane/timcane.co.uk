import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

interface SelectableButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const ButtonContainer = styled.button<{ $selected: boolean }>`
  padding: 1.2rem 2rem;
  font-size: 1.2rem;
  border: 2px solid ${colors.theme};
  border-radius: 8px;
  background-color: ${props => props.$selected ? colors.background : colors.theme};
  color: ${props => props.$selected ? colors.theme : colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  box-shadow: ${props => props.$selected ? `0 4px 8px rgba(0, 0, 0, 0.2)` : 'none'};
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
  }

  &:hover {
    transform: ${props => props.$selected ? 'none' : 'scale(1.05)'};
    background-color: ${props => props.$selected ? colors.background : colors.themeHover};
  }

  &:active {
    transform: ${props => !props.$selected && 'scale(0.95)'};
    background-color: ${props => props.$selected ? colors.background : colors.themeActive};
  }
`;

const SelectionIcon = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.background};
  background-color: ${colors.theme};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  
  @media (min-width: 768px) {
    top: -10px;
    right: -10px;
    font-size: 1.2rem;
    width: 24px;
    height: 24px;
    padding: 16px;
`;

export const SelectableButton: React.FC<SelectableButtonProps> = ({ 
  selected, 
  onClick, 
  children,
  className
}) => {
  return (
    <ButtonContainer $selected={selected} onClick={onClick} className={className}>
      {children}
      {selected && <SelectionIcon>X</SelectionIcon>}
    </ButtonContainer>
  );
};
