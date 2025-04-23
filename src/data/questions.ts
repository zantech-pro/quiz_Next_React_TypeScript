import { Question } from "@/types/Question";


export const questions: Question[] = [
    {
      id: 1,
      pergunta: "O que é o React?",
      opcoes: [
        "Um framework para backend",
        "Uma linguagem de programação",
        "Uma biblioteca JavaScript para interfaces de usuário",
        "Um banco de dados NoSQL"
      ],
      respostaCerta: "Uma biblioteca JavaScript para interfaces de usuário"
    },
    {
      id: 2,
      pergunta: "Qual hook é usado para controlar o estado de um componente?",
      opcoes: ["useState", "useEffect", "useContext", "useRef"],
      respostaCerta: "useState"
    },
    {
      id: 3,
      pergunta: "Qual hook permite executar efeitos colaterais em componentes?",
      opcoes: ["useMemo", "useCallback", "useEffect", "useReducer"],
      respostaCerta: "useEffect"
    },
    {
      id: 4,
      pergunta: "Como é chamado o processo de passar dados de um componente pai para um filho?",
      opcoes: ["Context", "State lifting", "Props", "Hooks"],
      respostaCerta: "Props"
    },
    {
      id: 5,
      pergunta: "Qual método do React é usado para renderizar elementos na DOM?",
      opcoes: ["render()", "ReactDOM.render()", "React.mount()", "React.create()"],
      respostaCerta: "ReactDOM.render()"
    },
    {
      id: 6,
      pergunta: "O que o hook useRef() retorna?",
      opcoes: [
        "Um array com valores",
        "Uma função de callback",
        "Um objeto mutável com a propriedade .current",
        "Um número"
      ],
      respostaCerta: "Um objeto mutável com a propriedade .current"
    },
    {
      id: 7,
      pergunta: "Qual das opções é verdadeira sobre o Virtual DOM?",
      opcoes: [
        "É o DOM original da página",
        "É uma representação leve do DOM real",
        "É um DOM que não muda",
        "É um DOM feito apenas com CSS"
      ],
      respostaCerta: "É uma representação leve do DOM real"
    },
    {
      id: 8,
      pergunta: "Qual comando cria uma nova aplicação React com Vite?",
      opcoes: [
        "npx react-app my-app",
        "npm init vite@latest my-app",
        "npx create-react-app my-app",
        "vite new my-app"
      ],
      respostaCerta: "npm init vite@latest my-app"
    },
    {
      id: 9,
      pergunta: "Qual hook é mais apropriado para compartilhar estado global?",
      opcoes: ["useState", "useEffect", "useContext", "useRef"],
      respostaCerta: "useContext"
    },
    {
      id: 10,
      pergunta: "Em React, qual das alternativas é usada para evitar re-renderizações desnecessárias?",
      opcoes: ["useReducer", "useLayoutEffect", "React.memo", "useEffect"],
      respostaCerta: "React.memo"
    }
  ];
