import React from "react"

const BannerContext = React.createContext()

export default function Banner({ children, status="success" }){
    return(
        <BannerContext.Provider value={{status}}>
            <div className={`banner ${status}`}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}

export { BannerContext }