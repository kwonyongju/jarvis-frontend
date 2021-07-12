import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  margin: 0 auto;

  justify-content: center;
  max-width: 1080px;
`;

const Header = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Header;
