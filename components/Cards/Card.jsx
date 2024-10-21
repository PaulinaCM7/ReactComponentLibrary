import React from "react"

const CardContext = React.createContext()

export default function Card({ children }){
    const [hover,setHover] = React.useState(false)
    
    return(
        <CardContext.Provider value={{hover}}>
            <div className={`card`} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                { children }
            </div>
        </CardContext.Provider>
    )
}

export { CardContext }