export function Game({question,clickVAriant}){
    return (
        <div className="Game">
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text,index)=>{
                    return <li key={text} onClick={()=>clickVAriant(index)}>{text}</li>
                })}
            </ul>

        </div>
    )
}