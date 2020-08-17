const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textInput')

const numWords = 100
var words =[
  '수건',
  '감사',
  '김치',
  '상처',
  '학생',
  '학교',
  '계란',
  '계단',
  '지갑',
  '연필',
  '버터',
  '확실',
  '읽다',
  '없어',
  '선생님',
  '야'
]


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
let keyStrokes = 0
textInputElement.addEventListener('input', () => {
    // get all span type in an array
    
    const arrayText = document.getElementsByTagName("span")
    //array value is values of all that is typed in
    const arrayValue = textInputElement.value.split('')
    const keyTyped = textInputElement.value
    letterTyped = arrayValue.length
    // -1 because index needs to start from 0 and length is always at least 1
    const inputCharacter = arrayValue[letterTyped-1]
    console.log(inputCharacter)
    if (inputCharacter == null) {
        
    } else if(whiteSpace(inputCharacter)&&
         textInputElement.value !== arrayText[wordTyped].innerHTML){
        arrayText[wordTyped].classList.remove('correct')
        arrayText[wordTyped].classList.add('wrong')
        wordTyped += 1
        textInputElement.value = []
        rowLength -= wordLengthCalculator(arrayText[wordTyped].innerHTML.length)
        
    } else if (inputCharacter === arrayText[wordTyped].innerHTML[letterTyped-1]) {
        arrayText[wordTyped].classList.add('correct')
        arrayText[wordTyped].classList.remove('wrong')
       
    } else {
        arrayText[wordTyped].classList.remove('correct')
        arrayText[wordTyped].classList.add('wrong')
        correct = false
        
    }
    if(textInputElement.value === arrayText[wordTyped].innerHTML){
        wordTyped += 1
        textInputElement.value = []
        rowLength -= wordLengthCalculator(arrayText[wordTyped].innerHTML.length)
    } 
    if (rowLength + 10.48 < wordLengthCalculator(arrayText[wordTyped].innerHTML.length)){
      $('#textDisplay').css('top','-=60px')
      rowLength = 886.007
    }
    console.log(rowLength)
  })
  
  function wordLengthCalculator(wordLength) {
      return (wordLength-1)*40 + 10.48
  }

  function countKeyStrokes(){
      keyStrokes = ++
      textInputElement.value == []
  }



