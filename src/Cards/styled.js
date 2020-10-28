import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const glow = css`
  box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
`;

export const CardsContainer = styled.div`
  ${flexCenter}
  height: 100vh;
  background: #d4805c;
`;

export const CarouselContainer = styled.div`
  ${flexCenter}
  flex-direction: row;
`;

export const Arrows = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 20px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
  }
`;

//card

export const Card = styled.div`
  ${flexCenter}
  background: #2f2b32;
  color: #f2f2f2;
  padding: 20px;
  width: 400px;
  height: 450px;
`;

export const Question = styled.div`
  font-family: "Rubik", sans-serif;
  font-size: 25px;
  width: 90%;
  margin-bottom: 15px;
`;

export const Option = styled.div`
  background: #f2f2f2;
  color: #2f2b32;
  width: 100px;
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    ${glow}
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        box-shadow: 0 0 10px #f2f2f2, 0 0 40px #f2f2f2, 0 0 80px #f2f2f2;
      `
    );
  }}
  ${(props) => {
    return (
      props.isCorrect === "red" &&
      css`
        background-color: #aa5758;
      `
    );
  }}

  ${(props) => {
    return (
      props.isCorrect === "green" &&
      css`
        background-color: #8b8a65;
      `
    );
  }}
`;

export const SubmitButton = styled.button`
  font-family: "Open Sans";
  font-weight: bold;
  padding: 10px 35px;
  font-size: 15px;
  background: #f2f2f2;
  color: #2f2b32;
  margin: 15px;
  cursor: pointer;

  &:hover {
    ${glow}
  }
`;
