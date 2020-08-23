import React from 'react'
import Nav from './Nav'
export default function Header() {
    return (
        <div>
            <header>
                <a href="index.html">
                    <img src="logo.png" width="auto" height="50" atl="logo" class="logo" />
                </a>
                     
                <form id="search">
                    <input type="text" name="q" id="search" placeholder="Search" />
                    <a href="#" class = "search-button">
                        <i class="fas fa-search"></i>
                    </a>
                </form>
                <Nav />
            </header>
        </div>
    )
}
