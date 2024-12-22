import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav-bar'>
                <div>
                    <h1 className='text-2xl text-black'>#PORTFOLIO</h1>
                </div>
                <div>
                    <ul className='nav-links'>
                        <li><a href="#home" className=''>Home</a></li>
                        <li><a href="#about" className=''>About</a></li>
                        <li><a href="#projects" className=''>Projects</a></li>
                        <li><a href="#experience" className=''>Experience</a></li>
                        <li><a href="#contact" className=''>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
