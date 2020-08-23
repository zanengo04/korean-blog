import React from 'react'
import List from './List.js'

export default function Nav() {
    return (
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
                <li class="listHover"><a href="typing.html">Typing Practice</a>
                <ul class='dropMenu'>
                    <List link="/typing-1" content="Hangeul"/>
                    <List link="paragraph.html" content="Paragraph"/>
                </ul>
                </li>
                <List link="/about" content="About"/>
                <List link="contact.html" content="Contact"/>
                <List link="signup.html" content="Sign up"/>
                <List link="login.html" content="Log In"/>
            </ul>
        </nav>
    )
}
