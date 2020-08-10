const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textInput')

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
        content += words[randIndex];
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


textInputElement.addEventListener('input', () => {
    // get all span type in an array
    //const arrayText = textDisplayElement.querySelectorAll('span')
    const arrayText = document.getElementsByTagName("span")
    const arrayValue = textInputElement.value.split('')
    
    wordTyped = 0
    letterTyped = arrayValue.length
    console.log(arrayText[0].innerHTML[0])
    
   
    if (inputCharacter == null) {
        arrayText[wordIndex].classList.remove('correct')
        arrayText[wordIndex].classList.remove('wrong')
        correct = false
    } else if (inputCharacter === arrayText[wordTyped].innerHTML[letterTyped]) {
        arrayText[wordIndex].classList.add('correct')
        arrayText[wordIndex].classList.remove('wrong')
        
    } else {
        arrayText[wordIndex].classList.remove('correct')
        arrayText[wordIndex].classList.add('wrong')
        correct = false
        
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
  

