import React from 'react'

export default function Aside() {
    return (
        <div>
            <aside class='left-sidebar'>
                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" 
                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="07fFQvzB"></script>
                
                <div class="social">
                <a href="https://www.facebook.com/" target="_blank">
                    <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width=""
                    data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
                    <i class="fab fa-facebook"></i></a>
                <a href="https://www.youtube.com/" target ="_blank">
                    <div class="g-ytsubscribe" data-channel="GoogleDevelopers" 
                    data-layout="default" data-count="default"></div> 
                    <i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/" target ="_blank">Instagram <i class="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/" target ="_blank">Twitter <i class="fab fa-twitter"></i></a>
                </div>
            </aside>
            <aside class='right-sidebar'></aside>
        </div>
    )
}
