import styled from 'styled-components';

export const OutlinedButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.textColor.primary};
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: 600;
  border-radius: 12px;
  padding: 10px;
  max-width: 210px;
  margin: 10px;
  
  &:hover {
    cursor: pointer;
    background-color: #87C7BD24;
  }
`;