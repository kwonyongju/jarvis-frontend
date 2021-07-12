import React from "react";
import styled from "styled-components";
import { CopyrightOutlined } from "@ant-design/icons";

const Root = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding-bottom: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;

  width: 100%;
`;

const Footer = () => {
  return (
    <Root>
      <Wrapper>
        <CopyrightOutlined style={{ marginRight: "5px" }} />
        Yongju Kwon. ALL RIGHT RESERVED.
      </Wrapper>
    </Root>
  );
};

export default Footer;
