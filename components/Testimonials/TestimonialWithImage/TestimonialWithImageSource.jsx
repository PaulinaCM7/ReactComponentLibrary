import React from "react"

export default function TestimonialWithImageSource({ children }){
    return (
        <div className="testimonialwithimage--source">
            <img className="testimonialwithimage--quoteimg" src="/images/Quote.png" alt="quotes"/>
            { children }
        </div>
    )
}