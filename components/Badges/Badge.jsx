import React from "react"

export default function Badge({children, color="gray", shape="square"}){
    return(
        <div className={`badge ${color} ${shape}`}>
            {children && children}
        </div>
    )
}