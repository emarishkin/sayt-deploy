

export function MainVarInfo({title,differences}){
    return(
        <ul>
            <li className="var-item">
               <p><strong>{title}</strong>{differences}</p>
            </li>
        </ul>
    )
}