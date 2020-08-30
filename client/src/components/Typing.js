import React from 'react'

import ProgressBar from './ProgressBar'
const testData = [
    { bgcolor: "#000000", completed: 30 },
  ];
export default function Typing() {
    return (
        <main>
            <script src="typing.js" defer async></script>
            <div class="typingContainer">
                <script src="typing.js" defer></script>
                <div class="textBox">
                    <div class="text-display" id= "textDisplay">
                
                    </div>
                </div>
                
                <input type='text' class="text-Input" id="textInput" autofocus></input>
   
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
            </div>
        </main>
        
    )
}
