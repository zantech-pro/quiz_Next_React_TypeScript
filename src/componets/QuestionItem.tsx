import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
    const [selectedAnswer, SetSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null){
            SetSelectedAnswer(key);
            
            setTimeout(() =>{
                onAnswer(key);
                SetSelectedAnswer(null);
            }, 2000);

            
        }
    }
    return (

        <div>
            <div className="text-3xl font-bold mb-5">{count + 1}. {question.pergunta}</div>
            <div>
                
                {question.opcoes.map((item, key)=> (
                    
                    <div key={key} onClick={() => checkQuestion(key)} className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300 
                        ${selectedAnswer !== null ? 'cursor-auto': 'cursor-pointer hover:opacity-60'}
                        ${selectedAnswer !== null && question.opcoes[key] === question.respostaCerta && selectedAnswer === key && 'bg-green-300 border-green-500'}
                        ${selectedAnswer !== null && question.opcoes[key] !== question.respostaCerta && selectedAnswer === key && 'bg-red-300 border-red-300'}
                        `}
                    >{item}</div>

                ))}

            </div>
        </div>

    );

}