import { IoClose, IoLogoGithub } from "react-icons/io5";
import styled, { css } from "styled-components";

const commonIconStyle = css`
  transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
`;

export const CloseIcon = styled(IoClose)`
  ${commonIconStyle}
  color: ${({ theme }) => theme.textColor.primary};
  &:hover {
    color: ${({ theme }) => theme.accent.primary};
  }
`;

export const GithubIcon = styled(IoLogoGithub)`
  ${commonIconStyle}
  color: ${({ theme }) => theme.textColor.secondary};
  &:hover {
    color: ${({ theme }) => theme.textColor.primary};
  }
`;
