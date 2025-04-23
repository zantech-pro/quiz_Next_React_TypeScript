import { Question } from "@/types/Question"


type Props = {
    questions: Question[];
    answers: number[];
}

type resultado = {
    pergunta: string;
    resposta: string;
    status: 'Acertou' | 'Errou'
}

export const Results = ({questions, answers}: Props) => {

    let listaResposta: resultado[] = [];
    let resultadoAcertos: number = 0

    for(let i = 0; i < questions.length; i++){

        if(questions[i].respostaCerta === questions[i].opcoes[answers[i]]){
            listaResposta.push({pergunta: questions[i].pergunta, resposta: questions[i].opcoes[answers[i]], status: 'Acertou'})
            resultadoAcertos += 1;
        }else{
            listaResposta.push({pergunta: questions[i].pergunta, resposta: questions[i].opcoes[answers[i]], status: 'Errou'})
        }  
 
    } 


    return (
        <div>
            
            {listaResposta.map((item, key)=> (
                <div key={key} className="mb3">
                    <div className="font-bold">{key + 1}. {item.pergunta}</div>
                <div>
                    <span className="font-bold">{item.status === 'Acertou'? 'Acertou: ':'Errou: '}</span>
                    {item.resposta}
                </div>
                </div>
            ))}
            <div>Numeros de acertos: {resultadoAcertos}</div>
        </div>
    );
}