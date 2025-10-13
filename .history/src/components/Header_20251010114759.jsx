import React from "react"
import { NavLink } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Header(){
    const navigation =[
        {path:'/',name:'List Book'},
        { path:'/add', name:'Add Book'}
    ]
    return(
    
     <header>
    <h1>Book Management</h1>
    <nav>
       {navigation.map(nav=>(
        <NavLink
        key={nav.name}
        to={nav.path}>
{nav.name}
        </NavLink>
       ))}
         </nav>
</header>
)
}
export default Header