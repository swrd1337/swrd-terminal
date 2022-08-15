import styled from "styled-components";

export const Headline = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const DialogHeading = styled.h4`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.accent.secondary};
  user-select: none;
`

export const Typography = styled.p`
  &::before {
    content: ${({ before }) => before || ''};
  }
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;