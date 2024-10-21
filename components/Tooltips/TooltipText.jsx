import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipText({ children }){
    const { themeMode, themeColor } = React.useContext(TooltipContext);
    return(
        <h2 className={`tooltip--text ${themeMode} ${themeColor}`}>{children}</h2>
    )
}