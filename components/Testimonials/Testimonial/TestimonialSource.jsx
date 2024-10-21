import React from "react"

export default function TestimonialSource({ children }){
    const name = children[0]
    const title = children[1]
    return (
        <div className="testimonial--source">
            { name }
            <h3 className="testimonial--separator">/</h3>
            { title }
        </div>
    )
}