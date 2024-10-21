import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipTitle({ children }){
    const colors = {
        light: {
            normal: '#111827',
            blue: '#1E40AF',
            pink: '#A9229B',
            green: '#137A2A',
        },
        bold: {
            normal: '#FFFFFF',
            blue: '#FFFFFF',
            pink: '#FFFFFF',
            green: '#FFFFFF',
        },
    }
    const { themeMode, themeColor } = React.useContext(TooltipContext);
    const myColor = colors[themeMode][themeColor];
    const styles = {
        color: myColor
    }
    return(
        <h1 className="tooltip--title" style={styles}>{children}</h1>
    )
}