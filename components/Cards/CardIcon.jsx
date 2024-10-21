import React from "react"

export default function CardIcon({ children, color="#3F75FE" }){
    const styles = {
        backgroundColor: color
    }
    return(
        <div className="card--icon" style={styles}>
            {children}
        </div>
    )
}