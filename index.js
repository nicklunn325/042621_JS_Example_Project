let jokeApi = "https://official-joke-api.appspot.com/random_joke"

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#fetch-joke').addEventListener('click', fetchJoke)
    document.querySelector('h1').addEventListener("click", randomizeColor)
})

function fetchJoke(){
    fetch(jokeApi)
    .then(res => res.json())
    .then(data => appendJoke(data)) 
}

function appendJoke(joke){
    // debugger;
    let ul = document.querySelector("#jokes-list")
    let li = document.createElement('li')
    li.innerText = joke.setup
    let btn = document.createElement('button')
    btn.innerText = "Punchline"
    btn.dataset.punchline = joke.punchline

    btn.addEventListener('click', showPunchLine)
    li.appendChild(btn)
    ul.appendChild(li)
}

function showPunchLine(e){
    // debugger;
    let li = e.target.parentElement
    let p = document.createElement('p')
    p.innerText = e.target.dataset.punchline
    let button = document.createElement('button')
    button.innerText = "Dad Joke"
    let button2 = document.createElement('button')
    button2.innerText = "Nah"
    p.appendChild(button)
    p.appendChild(button2)
    p.addEventListener('click', dadJokeOrNah)
    e.target.remove()
    li.appendChild(p)
}

function randomizeColor(e){
    console.log("clicked")
    let randomColorNumber = Math.floor(Math.random()*16777215).toString(16);
    let randomColor= `#${randomColorNumber}`
    e.target.style.color = randomColor
}

function dadJokeOrNah(e){
    if(e.target.innerText === "Dad Joke"){
        e.target.style.color = "green"
        e.target.innerText = "DAD JOKE!!!!"
        e.target.parentElement.lastChild.remove()

    } else if (e.target.innerText === "Nah"){
        e.target.parentElement.parentElement.remove()
    }
}
