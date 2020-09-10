import React from 'react'
import List from './List'

export default function DropDownMenu({link, content, dropDownContents}) {
    return (
        <li className="listHover"><a href={link}>{content}</a>
            <ul className='dropMenu'>
                {dropDownContents.map(contents => <List link={contents.link} content={contents.content}/>
                )}
                
            </ul>
        </li>
    )
}
