import React from "react";

export default function Header() {
    const handleNavClick = (event, targetId) => {
        event.preventDefault()
        const targetElement = document.getElementById(targetId)
        const headerOffset = document.querySelector('.header').offsetHeight
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }

    return (
        <div className="header">
            <nav className="header--navbar">
                <h1>Component Library ++</h1>
                <a className="header--item" href="#section--badges" onClick={(e) => handleNavClick(e, 'section--badges')}>Badges</a>
                <a className="header--item" href="#section--banners" onClick={(e) => handleNavClick(e, 'section--banners')}>Banners</a>
                <a className="header--item" href="#section--cards" onClick={(e) => handleNavClick(e, 'section--cards')}>Cards</a>
                <a className="header--item" href="#section--testimonials" onClick={(e) => handleNavClick(e, 'section--testimonials')}>Testimonials</a>
                <a className="header--item" href="#section--tooltips" onClick={(e) => handleNavClick(e, 'section--tooltips')}>Tooltip</a>
                <a className="header--item" href="#section--toasts" onClick={(e) => handleNavClick(e, 'section--toasts')}>Toast</a>
            </nav>
        </div>
    )
}