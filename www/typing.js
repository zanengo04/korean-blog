const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textInput')
let wordTyped = 0
const numWords = 20
var words =[
  '노트복',
  '감사',
  '김치',
  '상처',
  '학생',
  '학교',
  '계란',
  '계단',
  '선생님'
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



textInputElement.addEventListener('input', () => {
    // get all span type in an array
    //const arrayText = textDisplayElement.querySelectorAll('span')
    const arrayText = document.getElementsByTagName("span")
    const arrayValue = textInputElement.value.split('')
    letterTyped = arrayValue.length
    // -1 because index needs to start from 0 and length is always at least 1
    const inputCharacter = arrayValue[letterTyped-1]

    console.log(textInputElement.value)
    
    if (inputCharacter == null) {
        arrayText[wordTyped].classList.remove('correct')
        arrayText[wordTyped].classList.remove('wrong')
        correct = false
    } else if(whiteSpace(inputCharacter)&&
         textInputElement.value !== arrayText[wordTyped].innerHTML){
        arrayText[wordTyped].classList.remove('correct')
        arrayText[wordTyped].classList.add('wrong')
        wordTyped += 1
        textInputElement.value = []
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
    } 


        
    
    /*let correct = true
    
    arrayText.forEach((span, index) => {
      const character = arrayValue[index]
      let spanContent = span.innerHTML
      console.log(spanContent)
      for (i=0; i< spanContent.length; i++){
        if (character == null) {
            span.classList.remove('correct')
            span.classList.remove('wrong')
            correct = false
          } else if (character === spanContent.substring(i,1)) {
            span.classList.add('correct')
            span.classList.remove('wrong')
          } else {
            span.classList.remove('correct')
            span.classList.add('wrong')
            correct = false
          }
      }
      
    })
     for (wordIndex=0; wordIndex< wordTyped; wordIndex++){
        wordCompare = arrayText[wordIndex].innerHTML
        
        //loop through the word to get individual letters to compare
        for(letterIndex=0; letterIndex<letterTyped; letterIndex++){
            inputCharacter = arrayValue[wordIndex]
            letterCompare = wordCompare[letterIndex]
            
            console.log(letterCompare)
    */
  
    // if done this run showWord
  })
  

