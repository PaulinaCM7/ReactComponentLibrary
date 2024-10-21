import React from "react"
import { BsCheckCircleFill } from "react-icons/bs";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BannerContext } from "./Banner"

export default function BannerHeading({ children }){
    const { status } = React.useContext(BannerContext)
    const getIcon = (status) => {
        switch(status) {
            case "success": 
                return <BsCheckCircleFill fill="#34D399"/>
            case "warning":
                return <BsExclamationTriangleFill fill="#FBBF24"/>
            case "error":
                return <BsFillXCircleFill fill="#F87171"/>
            case "neutral":
                return <BsFillInfoCircleFill fill="#60A5FA"/>
        }
    }
    const icon = getIcon(status)
    
    return (
        <div className="banner--title">
            {icon}
            <h3 className="banner--title-text">{children}</h3>
        </div>
    )
}