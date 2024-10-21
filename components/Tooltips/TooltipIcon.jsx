import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipIcon({ children }){
    const colors = {
        light: {
            normal: '#6B7280',
            blue: '#1C51B9',
            pink: '#C7369E',
            green: '#41A557',
        },
        bold: {
            normal: '#C7C7C7',
            blue: '#7EA6F2',
            pink: '#F462E6',
            green: '#C1FFCF',
        },
    }
    const { themeMode, themeColor } = React.useContext(TooltipContext);
    const myColor = colors[themeMode][themeColor];
    const styles = {
        color: myColor
    }
    return(
        <div className="tooltip--icon" style={styles}>
            {children}
        </div>
    )
}