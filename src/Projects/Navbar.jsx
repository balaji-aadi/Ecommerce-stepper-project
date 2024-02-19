import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from './theme.context';

const Navbar = () => {
    const { toggleTheme } = useTheme()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ marginBottom: "7rem" }} >
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/stepper'}>Stepper</Link>

                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/files'}>Files</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={'/pagination'}>Pagination</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/practice'}>Practice</Link>
                        </li>


                    </ul>
                </div>
            </div>
            <div style={{ marginRight: "3rem" }}>
                <BsFillMoonStarsFill onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "1.5rem", color: "black" }} />
            </div>
        </nav>
    )
}

export default Navbar
