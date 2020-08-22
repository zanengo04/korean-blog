import React from 'react'
import List from './List.jsx'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <List link="/" content="Home"/>
                    <li class="listHover"><a href="#">Start Learning</a>
                        <ul class='dropMenu'>
                            <List link="#" content="Learn The Alphabet"/>
                            <List link="#" content="Basic Grammar"/>
                            <List link="#" content="Intermediate Grammar"/>
                            <List link="#" content="Essential Phrases"/>
                        </ul>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li class="listHover"><a href="/typing">Typing Practice</a>
                        <ul class='dropMenu'>
                            <List link="/typing" content="Hangeul"/>
                            <List link="/typing-paragraph" content="Paragraph"/>
                        </ul>
                    </li>
                    <List link="about.html" content="About"/>
                    <List link="contact.html" content="Contact"/>
                    <List link="/register" content="Sign up"/>
                    <List link="/login" content="Log In"/>
                </ul>
            </nav>
        </div>
    )
}
