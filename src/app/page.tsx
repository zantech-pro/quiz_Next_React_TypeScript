"use client"

import { QuestionItem } from "@/componets/QuestionItem";
import { Results } from "@/componets/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const title = 'Quiz de Teste de Conhecimento em React';
  const [currentQuestions, setCurrentQuestions] = useState<number>(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if(questions[currentQuestions + 1]){
      setCurrentQuestions(currentQuestions + 1)
      setShowResult(false)
    }else {
      setShowResult(true)
    }
  }
  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }
  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestions(0)
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">

      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem 
            question={questions[currentQuestions]}
            count={currentQuestions}
            onAnswer={handleAnswer}
          />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestions + 1} de ${questions.length} pergunta${questions.length === 1 ? '': 's'}
          `}
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
          
        </div>
      </div>

    </div>
  );
};

export default Page;
