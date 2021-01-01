import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'

export default function Nav() {
    const dropDownContents =[
        {link:"/alphabet", content:"Learn The Alphabet"},
        {link:"/survival-korean", content:"Survival Korean"},
    ]
    const dropDownContents2 =[
        {link:"/typing-hangeul", content:"Hangeul"},
        {link:"/typing", content:"Paragraph"},
    ]
    return (
        <nav>
            <ul>
                <List link="/home" content="Home"/>
                <DropDownMenu 
                    link="/alphabet"
                    content="Start Learning"
                    dropDownContents={dropDownContents}
                />
                <List link="/grammar" content="Grammar"/>
                <DropDownMenu 
                    link="#"
                    content="Typing Practice"
                    dropDownContents={dropDownContents2}
                />
                <List link="/about" content="About"/>
                <List link="/register" content="Sign up"/>
                <List link="/login" content="Log In"/>
            </ul>
            
            <div class="hamburger-icon" id="hamburger-icon">
                <div></div>
            </div>
        </nav>
    )
}
