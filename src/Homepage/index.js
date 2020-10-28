import React from "react";
import {
  HomepageContainer,
  Title,
  TitleContainer,
  StartContainer,
  GoButton,
  ReadyH2,
  CardLink,
} from "./styled";

const Homepage = () => {
  return (
    <HomepageContainer>
      <TitleContainer>
        <Title>Test Your Knowledge</Title>
      </TitleContainer>
      <StartContainer>
        <ReadyH2>Ready...</ReadyH2>
        <GoButton>
          <CardLink to="/cards">GO!</CardLink>
        </GoButton>
      </StartContainer>
    </HomepageContainer>
  );
};

export default Homepage;
