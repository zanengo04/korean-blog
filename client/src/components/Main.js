import React from 'react'

export default function Main() {
    return (
        <div>
             <main>
        
        
                <button onclick="displayDate()">The time is?</button>  
                <p id="demo">Click below to get random number</p>
                
                <input id="numb" type="number" min="0" />
                <button type="button" onclick="printRandom(1,5)">Generate Random Number</button>
        
        
                <br /><button onclick="window.print()">Print this page</button><br />
        
                
                <audio controls>
                    <source src="Like I Do - ELRIS.flac" />
                        Your browser doesn't support the audio format
                </audio><br />
        
                {/* set source with javascript for fast loading, resulting in better SEO */}
                <iframe height = '340' width = '560' src="https://www.youtube.com/embed/Amq-qlqbjYA" 
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen"
                    >
                </iframe>
                
                
                <h2>Grammar</h2>
                <ul>
                    <li> 고 싶어요. I want to</li>
                    <li> 있다</li>
                    <li> 없다</li>
                </ul>
        
                <h2>How To Study Effectively</h2>
                <ol>
                    <li> Designate a <i>time</i> to <u>focus</u> on studying</li>
                    <li> Get rid of distractions while studying</li>
                    <li> Focus on grammar and vocabs in the beginning</li>
                    <li class="special"> Be consistent and <em><strong>never</strong> give up</em>.</li>
                </ol>
                <h2>Basic Grammar</h2>
        
                <dl>
                <dt>을 텐데</dt>
                <dd>Use to make an assumption or when you are unsure about the outcome</dd>
                </dl>
        
                <p>Contact us at our <a href="test.html#Mail">mailling address</a></p>
                <p><strong>This</strong> is my <a href="https://www.last.fm/user/zanengo/library/tracks" 
                title="Last.fm" 
                target="_blank"> 
                page</a>
                </p>
                
                <figure>
                <img src="https://i.pinimg.com/originals/76/fa/eb/76faeb9c818efdf76cf066aea3685a80.jpg"
                alt= "Rose on stage" height="400px" width= "auto"
                />
                <figcaption>Rose on stage</figcaption>
                </figure>
        
        
                <p>안녕하세요.</p>
        
                <a href="test.html" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%284%29.jpg/250px-20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%284%29.jpg" 
                alt="My website" />
                </a>
        
                
                <p><a href="http://www.example.com/large-report.pdf">
                Download the sales report (PDF, 10MB)
                </a></p>
                <a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
                download="firefox-latest-64bit-installer.exe">
                Download Latest Firefox for Windows (64-bit) (English, US)
                </a>
                <br /><a href="mailto:zanengo04@gmail.com">Send email to creator</a>
                {/* creating a navigation menu */}
        
        
                <p>Contact the author of this page:</p>
        
                <address>
                    <a href="mailto:zanengo@gmail.com">zanengo@gmail.com</a><br />
                    <a href="tel:+13115552368">(311) 555-2368</a>
                </address>
                <p>My birthday is on the 9<sup>th</sup> of April.</p>
                <time datetime="2016-01-20">20 January 2016</time>
            </main>
        </div>
    )
}
