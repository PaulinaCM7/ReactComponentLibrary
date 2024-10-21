import React from "react"

export default function Testimonial({children}){
    return (
        <div className="testimonial">
            <img className="testimonial--pattern" src="./images/DotPattern.png" alt="pattern" />
            { children }
        </div>
    )
}