import React from "react"
import { CardContext } from "./Card"

export default function CardContent({ children }){
    const { hover } = React.useContext(CardContext)
    return(
        <div className={`card--content ${hover ? "hover" : "" }`}>
            { children }
        </div>
    )
}