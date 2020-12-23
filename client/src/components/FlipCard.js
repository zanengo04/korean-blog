import React from 'react'

export default function FlipCard({front, back}) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    {front}
                </div>
                <div class="flip-card-back">
                    {back}
                </div>
            </div>
        </div>
    )
}
