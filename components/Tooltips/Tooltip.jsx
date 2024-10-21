import React from "react"

const TooltipContext = React.createContext()

export default function Tooltip({ children, themeMode = "light", themeColor = "normal", onClose, className }) {
    const colors = {
        light: {
            normal: '#FFFFFF',
            blue: '#E0E7FF',
            pink: '#FFF3FC',
            green: '#E7FFF3',
        },
        bold: {
            normal: '#262626',
            blue: '#1E40AF',
            pink: '#A9229B',
            green: '#47AA5D',
        },
    }

    const triangleFill = colors[themeMode][themeColor]

    return (
        <div className={`tooltip ${className}`}>
            <div className={`tooltip--content ${themeMode} ${themeColor} ${className}`}>
                <TooltipContext.Provider value={{ themeMode, themeColor, onClose }}>
                    {children}
                </TooltipContext.Provider>
            </div>
            <div className="tooltip--triangle">
                <svg width="30" height="15" viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg">
                    <path className="tooltip--triangle-path" d="M15 15L0.27757 0.75L29.7224 0.750003L15 15Z" fill={triangleFill} />
                </svg>
            </div>
        </div>
    )
}

export { TooltipContext }