import styled from 'styled-components';
import { username } from "../../resources/commands";

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
  background-color: white;
  cursor: text;
`;

export const CommandBody = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.input.primary};
  font-weight: 600;
  cursor: text;

  &::before {
    content: '${username}';
    color: ${({ theme }) => theme.textColor.secondary};
    margin-right: 10px;
  }
`
