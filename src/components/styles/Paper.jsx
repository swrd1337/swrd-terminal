import styled from "styled-components";

export const GlassPaper = styled.div`
  border: 2px solid ${({ theme }) => theme.paper.border.primary};
  border-radius: 12px;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p};
  background-color: ${({ theme }) => theme.paper.background.primary};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 2;
`;

export const ContentBody = styled.div`
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p};
`;
