import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <nav className="navbar">
                <div className="nav-logo invert cursor-pointer">
                    <a href="#home"><img src="/Assets/man_static.png" alt="Logo" className='static' /></a>
                    <a href="#home"><img src="/Assets/man.gif" alt="Logo" className='gif'/></a>
                </div>
                <ul className="nav-links gap-6">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
                <a href="#contact" className="contact-button">Contact</a>
            </nav>
        </header>
    )
}
