import React from "react";
import styled from "styled-components";

import {
  PROJECT_DESCRIPTION,
  PROJECT_SUB_TITLE,
  PROJECT_TITLE,
} from "../constants/description";
import { tabletWidth } from "../constants/devices";

const Root = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 2vh;

  a {
    display: block;
    width: 80%;
  }

  @media only screen and (max-width: ${tabletWidth}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 30px;
`;
const TextWrapper = styled.div``;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
`;

const Description = styled.div`
  white-space: break-spaces;
`;

const Main = () => {
  return (
    <Root>
      <ImageWrapper>
        <img src="images/burger.png" width="300px" />
      </ImageWrapper>
      <TextWrapper>
        <Title>{PROJECT_TITLE}</Title>
        <SubTitle>{PROJECT_SUB_TITLE}</SubTitle>
        <Description>{PROJECT_DESCRIPTION}</Description>
      </TextWrapper>
    </Root>
  );
};

export default Main;
