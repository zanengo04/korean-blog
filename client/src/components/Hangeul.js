import React from 'react'

export default function Hangeul() {
    return (
        <main>
            <div class="container text-center">

                {/* <!-- Word & Input --> */}
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <p class="lead">Type The Given Word Within
                        <span class="text-success" id="seconds">5</span> Seconds:</p>
                        <h2 class="display-2 mb-5" id="current-word">hello</h2>
                        <form id="myForm"><input type="text"
                            class="form-control form-control-lg" placeholder="Start typing..." id="word-input" autofocus /></form>
                        
                        <h4 class="mt-3" id="message" />
                
                        {/* <!-- Time & Score Columns --> */}
                        <div class="row mt-5">
                            <div class="col-md-6">
                                <h3>Time Left:
                                <span id="time">0</span>
                                </h3>
                            </div>
                            <div class="col-md-6">
                                <h3>Score:
                                <span id="score">0</span>
                                </h3>
                            </div>
                        </div>
                
                    
                            
                        
                        
                    </div>
                </div>
            </div>
            
            
        </main>
    )
}
