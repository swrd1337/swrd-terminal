import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  height: ${({ h })  => h || 'auto'};
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
  align-items: ${({ alignItems }) => alignItems || 'unset'};
`