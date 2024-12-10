import { Children } from "react"

export function ButtonBottomItogs({children,onClick}){
    return(
        
        <button onClick={onClick}>{children}</button>
       
    )
}