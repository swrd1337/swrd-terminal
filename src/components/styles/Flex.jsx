import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  width: ${({ w }) => w || "auto"};
  height: ${({ h }) => h || "auto"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "unset"};
  align-items: ${({ alignItems }) => alignItems || "unset"};
  height: ${({ h }) => h};
  padding: ${({ p }) => p};
  user-select: none;

  @media (max-width: ${({ theme}) => theme.breakpoints.mobile}px) {
    ${({ responsive }) => responsive && `
      align-items: start;
    `}
  }
`;
