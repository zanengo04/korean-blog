import React from 'react'
import ProgressBar from './ProgressBar'
import $ from 'jquery'
let progressType =10
window.onload = function(){
    const textDisplayElement = document.getElementById('textDisplay')
    const textInputElement = document.getElementById('textInput')
    var i;
    const numWords = 10
    var vocab =[
        {word: '수건', keyStrokes: 5},
        {word: '학생', keyStrokes: 6},
        {word: '없어', keyStrokes: 6},
        {word: '확실', keyStrokes: 7},
        {word: '학생', keyStrokes: 6},
        {word: '버터', keyStrokes: 4},
        {word: '연필', keyStrokes: 6},
        {word: '지갑', keyStrokes: 5},
        {word: '계단', keyStrokes: 5},
        {word: '계란', keyStrokes: 5},
        {word: '학교', keyStrokes: 5},
        {word: '김치', keyStrokes: 5},
        {word: '감사', keyStrokes: 5},
        {word: '야', keystroke: 2}

    ]

    var words = vocab.map(vocabElement => vocabElement.word)


    showWord(words)
    function showWord(words) {
        
        for (i=0; i< numWords; i++) {
            // Generate random array index
            const randIndex = Math.floor(Math.random() * words.length);

            // creat span and custom attribute, the content of the span changes average time it is looped
            var content ="";
            var span = document.createElement("span");
            span.setAttribute('wordNum', i+1)
            content += words[randIndex]+ ' ';
            span.innerHTML=content
            // Output the list with comma seperating them
            textDisplayElement.appendChild(span)

        }
    }

    //Prevent white spaces
    textInputElement.addEventListener('keydown', function (event) {
        if (textInputElement.value.length === 0 && event.which === 32) {
            event.preventDefault();
        }
    });

    // test white space
    function whiteSpace(){
        var patt = new RegExp(" ");
        var res = patt.test(textInputElement.value);
        return res
    }


    let wordTyped = 0
    let rowLength = 886.007 //length of word display box
    let keyStrokeCorrect= 0
    let keyStrokeWrong = 0
    textInputElement.addEventListener('input', () => {
        // get all span type in an arrays
        progressType = wordTyped/numWords*100
        console.log(progressType)
        const arrayText = document.getElementsByTagName("span")
        //array value is values of all that is typed in
        const arrayValue = textInputElement.value.split('')
        
        let letterTyped = arrayValue.length
        // -1 because index needs to start from 0 and length is always at least 1
        const inputCharacter = arrayValue[letterTyped-1]
        //remove all styling if nothing has been typed
        if (inputCharacter == null) {
            arrayText[wordTyped].classList.remove('correct')
            arrayText[wordTyped].classList.remove('wrong')
        // add incorrect if the user presses the space button and the word is incorrect
        } else if(whiteSpace(inputCharacter)&&
            textInputElement.value !== arrayText[wordTyped].innerHTML){
            arrayText[wordTyped].classList.remove('correct')
            arrayText[wordTyped].classList.add('wrong')
            textInputElement.value = []
            rowLength -= wordLengthCalculator(arrayText[wordTyped].innerHTML.length)
            //remove space to compare, and add quotation mark
            const wordCompare = arrayText[wordTyped].innerHTML.replace(/\s+/g,'')
            const index = words.findIndex(object => object === wordCompare);
            keyStrokeWrong += vocab[index].keyStrokes
            wordTyped += 1
        //if word is correct then add correct class. Compare word to get index to find keystroke
        //empty out the currently typed value for next comparision, reduce rowLength
        } else if(textInputElement.value === arrayText[wordTyped].innerHTML){
            arrayText[wordTyped].classList.add('correct')
            arrayText[wordTyped].classList.remove('wrong')
            const wordCompare = arrayText[wordTyped].innerHTML.replace(/\s+/g,'')
            const index = words.findIndex(object => object === wordCompare);
            keyStrokeCorrect += vocab[index].keyStrokes
            wordTyped += 1
            textInputElement.value = []
            rowLength -= wordLengthCalculator(arrayText[wordTyped].innerHTML.length)

        //add correct if everything is correct
        } else if (inputCharacter === arrayText[wordTyped].innerHTML[letterTyped-1]) {
            arrayText[wordTyped].classList.add('correct')
            arrayText[wordTyped].classList.remove('wrong')
            
        
        
        }
        // this is to add incorrect while the user is typing
        else {
            arrayText[wordTyped].classList.remove('correct')
            arrayText[wordTyped].classList.add('wrong')
            
        }
        
        if (rowLength + 10.48 < wordLengthCalculator(arrayText[wordTyped].innerHTML.length)){
        $('#textDisplay').css('top','-=60px')
        rowLength = 886.007
        }
    })
    
    function wordLengthCalculator(wordLength) {
        return (wordLength-1)*40 + 10.48

    }
    console.log(progressType)
}

const testData = [
    { bgcolor: "#000000", completed: progressType },
];
export default function Typing() {
    return (
        <main>
            <script src="typing.js" defer async></script>
            <div className="typingContainer">
                <script src="typing.js" defer></script>
                <div className="textBox">
                    <div className="text-display" id= "textDisplay">
                
                    </div>
                </div>
                
                <input type='text' className="text-Input" id="textInput" autofocus></input>
   
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
                {/* {console.log(progressType)} */}
                <ProgressBar bgcolor="#000000" completed={progressType} />
            </div>
        </main>
        
    )
}
