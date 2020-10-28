import React, { useState, useEffect } from "react";
import { CardsContainer, CarouselContainer, Arrows } from "./styled";

import CurrentCard from "./CurrentCard";
import left from "../images/left.svg";
import right from "../images/right.svg";
import { triviaQuestions } from "./triviaQuestions";

const total_questions = triviaQuestions.length;
const currentRoundQuestions = [];

const question = {
  question: "What is the name for a cow-bison hybrid?",
  options: ["Cowson", "Bicow", "Beefalo", "Mooson"],
  correct: "Beefalo",
};

const Cards = () => {
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [isIncorrect, setIsIncorrect] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function selectRandomQuestions() {
    while (currentRoundQuestions.length <= 10) {
      const random_index = Math.floor(
        Math.random() * Math.floor(total_questions)
      );
      if (!currentRoundQuestions.includes(random_index - 1)) {
        currentRoundQuestions.push(random_index - 1);
      }
    }
  }

  console.log("total_questions", total_questions);

  function matchAnswer(e, finalAnswer) {
    e.preventDefault();
    setIsCorrect("green");
    setIsIncorrect("red");
    setIsSubmit(true);
    if (finalAnswer === question.correct) {
      setScore(score + 1);
    }
  }

  useEffect(() => {
    selectRandomQuestions();
  }, []);

  console.log("currentRoundQuestions", currentRoundQuestions);

  return (
    <CardsContainer>
      <p>Score: {score}</p>
      <CarouselContainer>
        <Arrows>
          <img src={left} alt="left arrow" />
        </Arrows>
        <CurrentCard
          question={question}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
          matchAnswer={matchAnswer}
          isSubmit={isSubmit}
        />
        <Arrows>
          <img src={right} alt="right arrow" />
        </Arrows>
      </CarouselContainer>
    </CardsContainer>
  );
};

export default Cards;
