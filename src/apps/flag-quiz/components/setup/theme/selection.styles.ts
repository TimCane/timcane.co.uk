import styled from 'styled-components';
import { colors } from '../../../theme/colors';

// Common selection indicator for all setup steps
export const SelectionIndicator = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: ${colors.success};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Common styling for selected items
export const selectedStyle = {
  boxShadow: `0 0 0 2px ${colors.theme}, 0 4px 8px rgba(0, 0, 0, 0.2)`,
  transform: 'scale(1.05)',
  backgroundColor: colors.themeActive
};
