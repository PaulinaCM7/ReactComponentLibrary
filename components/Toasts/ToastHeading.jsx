import React from "react"
import { ToastContext } from "./Toast"
import { HiOutlineCheckCircle } from "react-icons/hi"
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi"
import { HiOutlineXCircle } from "react-icons/hi"

export default function ToastHeading({ children }) {
    const { status } = React.useContext(ToastContext)
    const getIcon = (status) => {
        switch(status) {
            case "success":
                return <HiOutlineCheckCircle stroke="#34D399"/>
            case "warning":
                return <HiOutlineExclamationCircle stroke="#FBBF24"/>
            case "info":
                return <HiOutlineInformationCircle stroke="#60A5FA"/>
            case "error":
                return <HiOutlineXCircle stroke="#F87171"/>
        }
    }
    const icon = getIcon(status)

    return (
        <div className="toast--title">
            {icon}
            <h3 className="toast--title-text">{children}</h3>
        </div>
    )
}