import React from 'react'

export default function List(props) {
    return (
        <li><a href={props.link}>{props.content}</a></li>
    )
}
