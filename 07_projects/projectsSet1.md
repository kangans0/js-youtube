# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

## Project 1 (Color Changer)

```javascript
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach( (button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.background=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.background=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.background=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.background=e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.background=e.target.id;
        }
    })
})

```

## Project 2 (BMI calculator)

```javascript
const form=document.querySelector('form')
// this usecase will give you empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height===''|| height<0 || isNaN(height)){
    results.innerHTML="Please give a valid height";
  }
  else if(weight===''|| weight<0 || isNaN(weight)){
    results.innerHTML="Please give a valid weight";
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML=`<span>${bmi}</span>`
  }
})

```

## Project 3 (Digital Clock)

```javascript
const clock=document.getElementById('clock')


// very important function for updating data after how much interval 1000 means 1 sec
setInterval(function(){
  let date=new Date();
  // to print
// console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString();
},1000)
```

## Project 4 (Guess Game)

```javascript
let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
  submit.addEventListener('click',(e) => {
    e.preventDefault()
    const guess=parseInt(userInput.value)
    // console.log(guess);
    validateGuess(guess)

  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }else if(guess<1){
    alert("Please enter a number less than 100")
  } else if(guess>100){
    alert("Please enter a number more than 100")
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)

    }
  }
}
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guesses it right`)
    endGame();
  } else if(guess<randomNumber){
    displayMessage(`Number is low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is high`)
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
 
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function newgame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
  })
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newgame();
}

```
## Project 5 (Unlimited Colors)

```javascript
// generate a random color

const randomColor=function(){
  const hex="0123456789ABCDEF"
  let color="#";
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
const startChangingColor=function(){
  if(!intervalId){
    intervalId=setInterval(changeBGColor,2000);
  }

  function changeBGColor(){
    document.body.style.backgroundColor=randomColor()
  }
}
const stopChangingColor=function(){
  clearInterval(intervalId);
  intervalId=null;
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)



```
