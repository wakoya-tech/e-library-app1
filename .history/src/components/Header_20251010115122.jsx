import React from "react"
import { NavLink } from "react-router-dom"

function Header(){
    const navigation = [
        { path:'/', name:'List Book' },
        { path:'/add', name:'Add Book' }
    ];

    return (
        <header>
            <h1>Book Management</h1>
            <nav>
                {navigation.map(nav => (
                    <NavLink
                        key={nav.name}
                        to={nav.path}
                        style={({ isActive }) => ({
                            marginRight: "15px",
                            textDecoration: "none",
                            color: isActive ? "yellow" : "white"
                        })}
                    >
                        {nav.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header;
