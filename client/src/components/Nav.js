import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'


export default function Nav() {
    const dropDownContents =[
        {link:"/alphabet", content:"Learn The Alphabet"},
        {link:"#", content:"Essential Words"},
        {link:"#", content:"Survival Phrases"},
    ]
    const dropDownContents3 =[
        {link:"#", content:"Basic Grammar"},
        {link:"#", content:"Intermediate Grammar"},
        {link:"#", content:"Advance Grammar"},
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
                <DropDownMenu 
                    link="#"
                    content="Grammar"
                    dropDownContents={dropDownContents3}
                />
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
