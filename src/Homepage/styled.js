import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomepageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  background-color: #a2bab9;
`;

export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 50px;
`;

export const TitleContainer = styled.div`
  width: 80vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-top: 1px solid #2f2b32;
  margin: 20vh 10vw 0vh 10vw;
`;

export const StartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  margin-top: 15vh;

  @media screen and (max-width: 425px) {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReadyH2 = styled.h2`
  font-size: 30px;
`;

export const GoButton = styled.button`
  color: #a2bab9;
  background: #2f2b32;
  border: none;
  cursor: pointer;
  width: 130px;
  height: 60px;
  outline: none;
  margin: 0px 25px;

  &:hover {
    background: #f2f2f2;
    box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
  }
`;

export const CardLink = styled(Link)`
  color: #a2bab9;
  text-decoration: none;
  font-size: 50px;
  font-family: "Rubik", sans-serif;
  width: 100%;
  height: 100%;
`;
