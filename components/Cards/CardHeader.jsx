import React from "react"

export default function CardHeader({ children }){
    return(
        <h1 className="card--title">
            { children }
        </h1>
    )
}