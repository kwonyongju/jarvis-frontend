import { createGlobalStyle } from "styled-components";

import { c_black, c_dark_yellow } from "../utils/colors";

export const GlobalStyle = createGlobalStyle`

  html {
    margin: 0;
  }

  body {
    font-family: 'Encode Sans SC', sans-serif;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.5px;
    color: ${c_black};

    border: 10px solid ${c_dark_yellow};
  }

  a {
    color: black;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  .ant-modal-body {
    padding: 50px 0;
    text-align: center;
    white-space: break-spaces;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: center;
  }
`;
