import React, { useState } from "react";
import { Card, Question, Option, SubmitButton } from "./styled";

const CurrentCard = ({
  question,
  setSelectedOption,
  selectedOption,
  isCorrect,
  isIncorrect,
  matchAnswer,
  isSubmit,
}) => {
  function setSelectedValue(option) {
    if (!isSubmit) {
      setSelectedOption(option);
    }
  }
  function checkSelect(selected) {
    if (selected === selectedOption) {
      return true;
    } else {
      return false;
    }
  }

  function checkCorrect(option) {
    if (option === question.correct) {
      return isCorrect;
    } else {
      return isIncorrect;
    }
  }
  console.log(isSubmit);
  return (
    <Card>
      <Question>{question.question}</Question>
      {question.options.map((option) => {
        return (
          <Option
            key={option}
            isCorrect={checkCorrect(option)}
            onClick={() => setSelectedValue(option)}
            isActive={checkSelect(option)}
          >
            <p>{option}</p>
          </Option>
        );
      })}
      <SubmitButton
        onClick={(e) => matchAnswer(e, selectedOption)}
        disabled={isSubmit}
      >
        Submit
      </SubmitButton>
    </Card>
  );
};

export default CurrentCard;
