const stylesheet = document.getElementById("stylesheet")
stylesheet.href = "main.css"


const prevButton = document.getElementById("previous-project")
const projectNumberText = document.getElementById("project-number")
const nextButton = document.getElementById("next-project")

window.onbeforeunload = () => {stylesheet.href = "index.css"}

window.onload = async () => {

    prevButton.classList.remove("duration-400")
    nextButton.classList.remove("duration-400")
    prevButton.classList.add("delay-[2000ms]", "duration-1000")
    nextButton.classList.add("delay-[2000ms]", "duration-1000")
    await sleep(2000)
    refactorCSS()

}

const body = document.querySelector("body")

let projectNumber = 4
projectNumberText.innerText = `Page ${projectNumber} of 4`

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

function refactorCSS() {

    prevButton.classList.remove("delay-[2000ms]", "duration-1000")
    prevButton.classList.add("duration-400")
    nextButton.classList.remove("delay-[2000ms]", "duration-1000")
    nextButton.classList.add("duration-400")

}

// body.onclick = refactorCSS()

prevButton.onclick = () => {

    projectNumber = projectNumber > 1 ? projectNumber - 1 : 4
    projectNumberText.innerText = `Page ${projectNumber} of 4`

}

nextButton.onclick = () => {

    projectNumber = projectNumber < 4 ? projectNumber + 1 : 1
    projectNumberText.innerText = `Page ${projectNumber} of 4`

}