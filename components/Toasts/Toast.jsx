import React from "react"
import ReactDOM from "react-dom"

const ToastContext = React.createContext()

export default function Toast({ children, status = "success", positionx = "right", positiony = "bottom", id }) {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isFadingOut, setIsFadingOut] = React.useState(false)
    const toastRoot = document.getElementById('toast-root') || createToastRoot()

    React.useEffect(() => {
        const handleSubmit = (event) => {
            event.preventDefault()
            setIsVisible(true)
            setIsFadingOut(false)
            setTimeout(() => {
                setIsFadingOut(true)
                setTimeout(() => setIsVisible(false), 300)
            }, 3000)
        };

        const form = document.querySelector(`form[data-toast-id="${id}"]`)
        if (form) {
            form.addEventListener("submit", handleSubmit)
        }

        return () => {
            if (form) {
                form.removeEventListener("submit", handleSubmit)
            }
        }
    }, [id])

    if (!isVisible) return null

    return ReactDOM.createPortal(
        <ToastContext.Provider value={{ status, positionx, positiony }}>
            <div className={`toast ${status} ${isFadingOut ? 'fade-out' : ''}`} style={{ position: 'fixed', [positionx]: '1rem', [positiony]: '1rem' }}>
                {children}
            </div>
        </ToastContext.Provider>,
        toastRoot
    )
}

function createToastRoot() {
    const toastRoot = document.createElement('div')
    toastRoot.id = 'toast-root'
    document.body.appendChild(toastRoot)
    return toastRoot
}

export { ToastContext }