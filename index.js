

// initialize the count as 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


// listen for clicks on the add button
// increment the count variable when the button is clicked
function increment() {
    count += 1
    countEl.innerText = count
}


function save() {
    let resetCount = 0
    let records = count + ' - '
    saveEl.textContent+= records
    count = resetCount
    countEl.innerText = 0
}




/* function countdown() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}

countdown()
countdown() */

/* let welcomeEl = document.getElementById("welcome-el")

let name = 'Moses Shaibu'

let greeting = 'Welcome back to Scrimba,'

function welcomeUser() {
    welcomeEl.innerText = greeting + " " + name
}
welcomeUser()

welcomeEl.innerText += '👋' */