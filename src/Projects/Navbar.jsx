import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillEmojiSunglassesFill } from "react-icons/bs"
import { useTheme } from './theme.context';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    function textChanger(id) {
        return function (content) {
            document.querySelector("#" + id).textContent = content
        }
    }

    const Text = textChanger("theme")

    if (theme === "light") {
        Text("Sun's in a mood, Shining bright, not subdued.")
    }
    else if (theme === "Dark") {
        Text("Under the moon, A gentle glow, in the gloom")
    }


    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "indianred", marginBottom: "7rem" }} >
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
                            <Link className="nav-link " to={'/notification'}>Notification</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to={'/practice'}>Practice</Link>
                        </li>



                    </ul>
                </div>
            </div>
            <div className='auth__container'>
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link " to={'/login'}>Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to={'/register'}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to={'/logout'}>Logout</Link>
                    </li>
                </ul>
            </div>
            <div style={{ marginRight: "3rem" }}>
                {theme === "Dark" ?
                    <BsFillMoonStarsFill onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "1.5rem", color: "black" }} /> :
                    <BsFillEmojiSunglassesFill onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "1.5rem", color: "black" }} />}
            </div>
        </nav>
    )
}

export default Navbar
