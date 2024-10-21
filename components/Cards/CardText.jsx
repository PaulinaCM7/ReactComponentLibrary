import React from "react"

export default function CardText({ children }){
    return(
        <h3 className="card--text">
            { children }
        </h3>
    )
}