import React from 'react'
import Nav from './Nav'
export default function Header() {
    return (
        
        <header>
            <a href="/">
                <img src="logo.png" width="auto" height="50" atl="logo" class="logo" />
            </a>
            <Nav />     
            <form id="search">
                <input type="text" name="q" id="search" placeholder="Search" />
                <a href="#" class = "search-button">
                    <i class="fas fa-search"></i>
                </a>
            </form>
            
        </header>
        
    )
}
