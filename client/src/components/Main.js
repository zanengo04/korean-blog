import React from 'react'

import FlipCard from './FlipCard'

export default function Main() {
    return (
        <main>
            <h1>New to Korean?</h1>

            <div className="startHere">
                <a href="/alphabet">Start here</a>
            </div>
            <FlipCard 
                back = {<a href="/alphabet">Jump start your Korean by learning how to read and write</a>}
                front = {<h1>Korean Alphabet</h1>}
            />
            <FlipCard 
                back = {<a href='/survival-korean'>Want to travel to Korea? Learn these words and phrases</a>}
                front = {<h1>Survival Korean</h1>}
            />
            <FlipCard 
                back = {<a href ='/grammar'></a>}
                front = {<h1>Gramamr</h1>}
            />
        </main>
    
    )
}
