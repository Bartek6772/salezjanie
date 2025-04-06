import "./navbar.scss"
import LogoLight from "./../../assets/logo-light.png"
import LogoDark from "./../../assets/logo-dark.png"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={scrolled ? "active" : ""}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={scrolled ? LogoDark : LogoLight} alt="logo" />
                    </Link>
                </div>
                <div className="links">
                    {/* <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Strona Główna</NavLink> */}
                    <NavLink to="/o-szkole" className={({isActive}) => isActive ? "active" : ""}>O szkole</NavLink>
                    <NavLink to="/patron" className={({isActive}) => isActive ? "active" : ""}>Patron</NavLink>
                    <NavLink to="/dla-uczniow" className={({isActive}) => isActive ? "active" : ""}>Dla uczniów</NavLink>
                    <NavLink to="/rekrutacja" className={({isActive}) => isActive ? "active" : ""}>Rekrutacja</NavLink>
                    <NavLink to="/oratorium" className={({isActive}) => isActive ? "active" : ""}>Oratorium</NavLink>
                    {/* <NavLink to="/nauka" className={({isActive}) => isActive ? "active" : ""}>Nauka</NavLink> */}
                    {/* <NavLink to="/do-pobrania" className={({isActive}) => isActive ? "active" : ""}>Do pobrania</NavLink> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;