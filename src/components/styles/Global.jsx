import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.textColor.secondary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 1.20em;
    margin: 0;

    h1, h2, p {
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }

  button {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
  }

  footer {
    position: absolute;
    bottom: 0;
  }
`;

export default GlobalStyles;
