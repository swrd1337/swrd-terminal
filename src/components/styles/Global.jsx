import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face { 
    font-family: 'FiraCode';
    src: url('FiraCode-Light.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.textColor.secondary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 1.20em;
    margin: 0;

    h1, h2, p {
      @media (max-width: ${({ theme}) => theme.breakpoints.mobile}px) {
        text-align: center;
      }
      white-space: pre-wrap;
    }

    a {
      color: ${({ theme }) => theme.accent.secondary};
    }
  }

  button {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  span.user {
    color: ${({ theme }) => theme.accent.primary};
  }

  span.cmdhl {
    color: ${({ theme }) => theme.accent.primary};
    text-shadow: 0 0 5px ${({ theme }) => theme.accent.primary};
  }

  span.listhd {
    color: ${({ theme }) => theme.textColor.primary};
    text-shadow: 0 0 5px ${({ theme }) => theme.textColor.primary};
  }

  span.skillscore {
    color: ${({ theme }) => theme.textColor.primary};
  }

  span.cover {
    @media (max-width: ${({ theme}) => theme.breakpoints.mobile}px) {
      display: none;
    }
  }

`;

export default GlobalStyles;
