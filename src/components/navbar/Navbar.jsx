import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation()
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        userName: "Mohamed",
        isSeller: true,
    };

    const showMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">Freelance</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Freelance Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser && <span>Sign in</span>}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button className={active ? "active" : ""}>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => showMenu()}>
                            <img
                                src="/images/anime-black-and-white-isolated-icon-illustration-vector.jpg"
                                alt=""
                            />
                            <span>{currentUser?.userName}</span>
                            {open && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link className="link" to='/mygigs'>Gigs</Link>
                                            <Link className="link" to='/add'>Add New Gigs</Link>
                                        </>
                                    )}
                                    <Link className="link" to='/orders'>Orders</Link>
                                    <Link className="link" to='/messages'>Messages</Link>
                                    <Link className="link" to='/'>Log Out</Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link" to='/'>Graphics & Design</Link>
                        <Link className="link" to='/'>Vedio & Animation</Link>
                        <Link className="link" to='/'>Writing & Translation</Link>
                        <Link className="link" to='/'>AI Services</Link>
                        <Link className="link" to='/'>Gigital Marketing</Link>
                        <Link className="link" to='/'>Music & Audio</Link>
                        <Link className="link" to='/'>:Programmin & Tech</Link>
                        <Link className="link" to='/'>Bsuiness</Link>
                        <Link className="link" to='/'>Lifestyle</Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
};

export default Navbar;
