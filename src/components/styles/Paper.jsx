import styled from "styled-components";

export const GlassPaper = styled.div`
  border: 2px solid ${({ theme }) => theme.paper.border.primary};
  border-radius: 12px;
  width: 50em;
  height: 30em;
  background-color: ${({ theme }) => theme.paper.background.primary};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  
  @media (max-width: ${({ theme}) => theme.breakpoints.tablet}px) {
    width: 40em;
    top: 5em;
  }

  @media (max-width: ${({ theme}) => theme.breakpoints.mobile}px) {
    width: 100%;
    height: 50%;
    top: 15px;
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: auto;
  position: relative;
`;
