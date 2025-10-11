import React from "react"
import { NavLink } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Header(){
    const navigation =[
        {path:'/',name:'List Book'},
        { path:'/add', name:'Add Book'}
    ]
    return(<div className="container">
<header>
    <h1>Book Management</h1>
    <nav>
       {navigation.map(nav=>(
        <a
        key={nav.name}
        to={nav.path}>
{nav.name}
        </a>
       ))}
         </nav>
</header>
    </div>)
}
export default Header