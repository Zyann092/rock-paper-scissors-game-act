// player choices
let rockBtnPlyr = document.querySelector("#rockBtnPlyr")
let paperBtnPlyr = document.querySelector("#paperBtnPlyr")
let scissorsBtnPlyr = document.querySelector("#scissorsBtnPlyr")

// results
let resultTitle = document.querySelector("#resultTitle")

// player pick
let playerPickRock = document.querySelector("#playerPickRock")
let playerPickPaper = document.querySelector("#playerPickPaper")
let playerPickScissors = document.querySelector("#playerPickScissors")

// bot pick
let botPickRock = document.querySelector("#botPickRock")
let botPickPaper = document.querySelector("#botPickPaper")
let botPickScissors = document.querySelector("#botPickScissors")

// score
let invisibleNumber = document.querySelector("#invisibleNumber")
let pScore = document.querySelector("#pScore")
let bScore = document.querySelector("#bScore")
let dScore = document.querySelector("#dScore")


rockBtnPlyr.addEventListener("click", rockBattle)
paperBtnPlyr.addEventListener("click", paperBattle)
scissorsBtnPlyr.addEventListener("click", scissorsBattle)

let botChoices = ["rock", "paper", "scissors"]


// player pick
playerPickRock.setAttribute("style", "display: none")
playerPickPaper.setAttribute("style", "display: none")
playerPickScissors.setAttribute("style", "display: none")

// bot pick
botPickRock.setAttribute("style", "display: none")
botPickPaper.setAttribute("style", "display: none")
botPickScissors.setAttribute("style", "display: none")


// score
let tieScore = 0
let loseScore = 0
let winScore = 0

function rockBattle() {
    let botPicker = Math.round(Math.random() * 2)
    let botFighter = (botChoices[botPicker])
    console.log(botFighter)

    if (botFighter == "rock") {
        resultTitle.innerHTML = "It's a Tie"
        resultTitle.style.color = "black"

        botPickRock.removeAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        tieScore++
        dScore.innerHTML = tieScore
    } else if (botFighter == "paper") {
        resultTitle.innerHTML = "You Lose !"
        resultTitle.style.color = "red"

        botPickPaper.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        loseScore ++
        bScore.innerHTML = loseScore
    } else if (botFighter == "scissors") {
        resultTitle.innerHTML = "You Win !"
        resultTitle.style.color = "green"

        botPickScissors.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")

        winScore++
        pScore.innerHTML = winScore
    }
    playerPickRock.removeAttribute("style", "display: none")
    playerPickPaper.setAttribute("style", "display: none")
    playerPickScissors.setAttribute("style", "display: none")
}

function paperBattle() {
    let botPicker = Math.round(Math.random() * 2)
    let botFighter = (botChoices[botPicker])
    console.log(botFighter)

    if (botFighter == "paper") {
        resultTitle.innerHTML = "It's a Tie"
        resultTitle.style.color = "black"

        botPickPaper.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        tieScore++
        dScore.innerHTML = tieScore
    } else if (botFighter == "scissors") {
        resultTitle.innerHTML = "You Lose !"
        resultTitle.style.color = "red"

        botPickScissors.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")

        loseScore ++
        bScore.innerHTML = loseScore
    } else if (botFighter == "rock") {
        resultTitle.innerHTML = "You Win !"
        resultTitle.style.color = "green"

        botPickRock.removeAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        winScore++
        pScore.innerHTML = winScore
    }
    playerPickPaper.removeAttribute("style", "display: none")
    playerPickRock.setAttribute("style", "display: none")
    playerPickScissors.setAttribute("style", "display: none")
}

function scissorsBattle() {
    let botPicker = Math.round(Math.random() * 2)
    let botFighter = (botChoices[botPicker])
    console.log(botFighter)

    if (botFighter == "scissors") {
        resultTitle.innerHTML = "It's a Tie"
        resultTitle.style.color = "black"

        botPickScissors.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")

        tieScore++
        dScore.innerHTML = tieScore
    } else if (botFighter == "rock") {
        resultTitle.innerHTML = "You Lose !"
        resultTitle.style.color = "red"

        botPickRock.removeAttribute("style", "display: none")
        botPickPaper.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        loseScore ++
        bScore.innerHTML = loseScore
    } else if (botFighter == "paper") {
        resultTitle.innerHTML = "You Win !"
        resultTitle.style.color = "green"

        botPickPaper.removeAttribute("style", "display: none")
        botPickRock.setAttribute("style", "display: none")
        botPickScissors.setAttribute("style", "display: none")

        winScore++
        pScore.innerHTML = winScore
    }
    playerPickScissors.removeAttribute("style", "display: none")
    playerPickRock.setAttribute("style", "display: none")
    playerPickPaper.setAttribute("style", "display: none")
}