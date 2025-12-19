import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark-mode");
    };

    return (
        <>
            <nav className="navbar-custom d-flex justify-content-between align-items-center px-4 py-3 shadow-sm rounded-pill sticky-top" data-aos="fade-down">
                <div className="fw-bold fs-5 text-primary navbar-logo">Uday Dommeti</div>

                <div className="d-flex align-items-center gap-3 nav-links-desktop">
                    <a href="#Home" className="nav-link-custom">Home</a>
                    <a href="#About" className="nav-link-custom">About</a>
                    <a href="#Projects" className="nav-link-custom">Projects</a>
                    <a href="https://drive.google.com/file/d/1U8nP8r09bAzEMEIMs3wiu33aMbzAbyzX/view?usp=sharing" target="_blank" className="nav-link-custom">Resume</a>
                    <a href="#Contact" className="nav-link-custom">Contact</a>
                </div>

                <button className="p-0 border border-0 btn" onClick={toggleDarkMode}>
                    {darkMode ? <i className="bi bi-brightness-high-fill text-light"></i> : <i className="bi bi-moon-fill"></i>}
                </button>

                <GiHamburgerMenu
                    size={28}
                    className="hamburger-icon"
                    onClick={() => setOpen(true)}
                />
            </nav>

            <div className={`mobile-menu ${open ? "open-menu" : ""}`}>
                <button className="close-menu-btn" onClick={() => setOpen(false)}>✖</button>

                <a href="#Home" onClick={() => setOpen(false)}>Home</a>
                <a href="#About" onClick={() => setOpen(false)}>About</a>
                <a href="#Projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="https://drive.google.com/file/d/1cuWCI2L5ayJpCLYdyK5mxXKz5CWAxPNE/view?usp=sharing" target="_blank" onClick={() => setOpen(false)}>Resume</a>
                <a href="#Contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </>
    );
}

export default Navbar;
