import React from "react"

export default function BannerText({ children }){
    return (
        <>
            {children && <h3 className="banner--text">{children}</h3>}
        </>
    )
}