import { questions } from "../questions";

export function Result({correct}){
    return(
        <div className="result">
            <img className="result-public" src="./public/звезда.webp" alt="" />
            <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
           <a href="/">
           <button>Попробовать снова</button>
           </a>
        </div>
    )
}