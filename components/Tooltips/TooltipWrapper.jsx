import React from "react"
import { nanoid } from "nanoid"
import Tooltip from "./Tooltip"

export default function TooltipWrapper({ children }) {
    const tooltipId = React.useRef(nanoid())
    const [isTooltipVisible, setTooltipVisible] = React.useState({})
    const [isTooltipRendered, setTooltipRendered] = React.useState({})
    const timeoutRef = React.useRef(null)

    const handleMouseOver = () => {
        if (!isTooltipVisible[tooltipId.current]) {
            timeoutRef.current = setTimeout(() => {
                setTooltipRendered(prevState => ({
                    ...prevState,
                    [tooltipId.current]: true
                }));
                setTimeout(() => {
                    setTooltipVisible(prevState => ({
                        ...prevState,
                        [tooltipId.current]: true
                    }))
                }, 10)
            }, 2500)
        }
    }

    const handleMouseOut = () => {
        clearTimeout(timeoutRef.current)
    }

    const handleClose = () => {
        clearTimeout(timeoutRef.current)
        setTooltipVisible(prevState => ({
            ...prevState,
            [tooltipId.current]: false
        }));
        setTimeout(() => {
            setTooltipRendered(prevState => ({
                ...prevState,
                [tooltipId.current]: false
            }))
        }, 300)
    }

    const tooltipChild = React.Children.toArray(children).find(child => child.type === Tooltip)
    const elementChild = React.Children.toArray(children).find(child => child.type === Tooltip.Element)

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ display: 'inline-block', position: 'relative' }}>
            {isTooltipRendered[tooltipId.current] && React.cloneElement(tooltipChild, { onClose: handleClose, className: isTooltipVisible[tooltipId.current] ? 'visible' : '' })}
            {elementChild}
        </div>
    )
}