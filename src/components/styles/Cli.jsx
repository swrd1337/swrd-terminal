import styled from 'styled-components';
import { username } from "../../resources/mainInfo.json";

export const CliInput = styled.input`
  background-color: transparent;
  border: none;
  caret-color: transparent;
  &:focus {
    outline: none;
  }
  position: absolute;
  left: -1000px;
`;

export const CliCursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 16px;
  cursor: text;
`;

export const CommandBody = styled.div`
  &::before {
    content: '${username}';
    color: #d7d7d7;
    margin-right: 10px;
  }
  
  font-size: 16px;
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: 600;
  cursor: text;

  @media (max-width: ${({ theme}) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`
