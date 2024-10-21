import React from "react";
import { BsXLg } from "react-icons/bs";
import { TooltipContext } from "./Tooltip";

export default function TooltipHeading({ children }) {
    const icon = children[0];
    const title = children[1];
    const { themeMode, themeColor, onClose } = React.useContext(TooltipContext);
    const colors = {
        light: {
            normal: '#6B7280',
            blue: '#1C51B9',
            pink: '#C7369E',
            green: '#3C8C4E',
        },
        bold: {
            normal: '#C7C7C7',
            blue: '#D8D8D8',
            pink: '#D8D8D8',
            green: '#D8D8D8',
        },
    };
    const xFill = colors[themeMode][themeColor];
    return (
        <div className="tooltip--heading">
            {icon}
            {title}
            <button className="tooltip--close" onClick={onClose}><BsXLg fill={xFill} /></button>
        </div>
    );
}