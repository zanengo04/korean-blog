import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'


export default function Nav() {
    const dropDownContents =[
        {link:"#", content:"Learn The Alphabet"},
        {link:"#", content:"Basic Grammar"},
        {link:"#", content:"Intermediate Grammar"},
        {link:"#", content:"Essential Phrases"},
    ]
    const dropDownContents2 =[
        {link:"/typing-hangeul", content:"Hangeul"},
        {link:"/typing", content:"Paragraph"},
    ]
    return (
        <nav>
            <ul>
                <List link="/" content="Home"/>
                <DropDownMenu 
                    link="#"
                    content="Start Learning"
                    dropDownContents={dropDownContents}
                />
                <List link="#" content="Blog"/>
                <DropDownMenu 
                    link="#"
                    content="Typing Practice"
                    dropDownContents={dropDownContents2}
                />
                <List link="/about" content="About"/>
                <List link="/contact" content="Contact"/>
                <List link="/register" content="Sign up"/>
                <List link="/login" content="Log In"/>
            </ul>
        </nav>
    )
}
