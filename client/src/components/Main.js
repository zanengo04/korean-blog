import React from 'react'

import FlipCard from './FlipCard'

export default function Main() {
    return (
        <main>
            <h1>New to Korean?</h1>

            <div className="startHere">
                <a href="/register">Start learning today</a>
            </div>
            <FlipCard 
                back = {<a href="/alphabet">Jump start your Korean by learning how to read and write</a>}
                front = {<h1>Korean Alphabet</h1>}
            />
            <FlipCard 
                back = {<a href='/survival-korean'>Learn the most important words</a>}
                front = {<h1>Essential Words</h1>}
            />
            <FlipCard 
                back = {<a href ='/grammar'>Want to travel to Korea? Learn this phrases</a>}
                front = {<h1>Survival Phrases</h1>}
            />
        </main>
    
    )
}
