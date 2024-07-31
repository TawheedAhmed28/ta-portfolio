const stylesheet = document.getElementById("stylesheet")
stylesheet.href = "main.css"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const body = document.querySelector("body")

const prevButton = document.getElementById("previous-project")
const projectNumberText = document.getElementById("project-number")
const nextButton = document.getElementById("next-project")

const projectImage = document.getElementById("project-image")
const imageNumber = document.getElementById("image-indicator")
const prevImage = document.getElementById("prev-image")
const nextImage = document.getElementById("next-image")


window.onbeforeunload = () => {stylesheet.href = "index.css"}

window.onload = async () => {
    
    prevButton.classList.remove("duration-400")
    nextButton.classList.remove("duration-400")
    prevButton.classList.add("delay-[2000ms]", "duration-1000")
    nextButton.classList.add("delay-[2000ms]", "duration-1000")

    prevImage.classList.remove("duration-400")
    nextImage.classList.remove("duration-400")
    prevImage.classList.add("delay-[2200ms]", "duration-1000")
    nextImage.classList.add("delay-[2200ms]", "duration-1000")

    await sleep(2200)
    refactorCSS()
    
}


let projectNumber = 1
let imagePage = 1

const projectNames = ["Wordle", "Chilli", "Games", "Pizza"]
projectNumberText.innerText = `Project ${projectNumber} of 4`
projectImage.src = `images/${projectNames[projectNumber - 1]}/${projectNames[projectNumber - 1]}${imagePage}.png`

const descriptions = [
    
    "Project 1: Wordle - solo project, 1 week\nTechnologies: HTML, CSS, JavaScript\n\nI built a game from a given list using the technologies above. I decided on Wordle as I was already very familiar with the game. The functionality of checking the win criteria proved very challenging, so it allowed me to greatly expand my knowledge of JavaScript and HTML.",
    
    "Project 2: Capsaicin Station - solo project, 1 week\nTechnologies: EJS, CSS, JavaScript, MongoDB\n\nFull stack MEN app with CRUD functionality - I created an app where users can post and see information about chillies. I used two models, a user model and a chilli model, which was embedded within the user model to allow for each chilli to have “owners”.", 
    
    "Project 3: Joystickipedia - paired project, 1 week\nTechnologies: JSX, JavaScript, React, CSS (Tailwind), React Select\n\nFull stack MERN app with CRUD functionality. Users can post games, and add them to a drop down list of genres. On each game, users can also add reviews. For this project, I focused more on the front end, and especially on review functionality. I wanted to allow users to provide a star rating, so using React.js to allow star emojis to represent rating values, and Tailwind to alter the opacity of the stars, I was able to create an easy to understand user interface for doing so.",
    
    "Project 4: Pizza Delivery - solo project, 1 week\nTechnologies: Python, Django, React, CSS (Tailwind), React Select, JSX, Postgres\n\nFull stack Python-Django-SQL app with CRUD functionality. Users can post pizzas and add toppings to them from a drop down menu. Users can also post pizza orders, which also have CRUD functionality."
    
]

const readmes = [
    
    "https://github.com/TawheedAhmed28/wordle-game-project",
    
    "https://github.com/TawheedAhmed28/chilli-database-project",
    
    "https://github.com/KizzaThorley/gamereview-project-frontend",
    
    "https://github.com/TawheedAhmed28/pizza-delivery-project-frontend"
    
]

const deploys = [
    
    "https://tawheedahmed28.github.io/wordle-game-project/",
    
    "https://capsaicin-station.netlify.app/",
    
    "https://joystickipedia.netlify.app/",
    
    "https://pizza-delivery-api.netlify.app/"
    
]

const projectImages = [
    
    ["Wordle1", "Wordle2", "Wordle3"],
    
    ["Chilli1", "Chilli2"],
    
    ["Games1", "Games2", "Games3"],
    
    ["Pizza1", "Pizza2", "Pizza3", "Pizza4", "Pizza5"]
    
]

imageNumber.innerText = `Image ${imagePage} of ${projectImages[projectNumber - 1].length}`

const projectDescription = document.getElementById("project-description")
projectDescription.innerText = descriptions[projectNumber - 1]

const github = document.getElementById("project-readme")
github.href = readmes[projectNumber - 1]

const deploy = document.getElementById("deployed-project")
deploy.href = deploys[projectNumber - 1]

function refactorCSS() {

    prevButton.classList.remove("delay-[2000ms]", "duration-1000")
    nextButton.classList.remove("delay-[2000ms]", "duration-1000")
    prevButton.classList.add("duration-400")
    nextButton.classList.add("duration-400")

    prevImage.classList.remove("delay-[2200ms]", "duration-1000")
    nextImage.classList.remove("delay-[2200ms]", "duration-1000")
    prevImage.classList.add("duration-400")
    nextImage.classList.add("duration-400")

}

function changePage() {

    projectNumberText.innerText = `Project ${projectNumber} of 4`
    imagePage = 1
    projectImage.src = `images/${projectNames[projectNumber - 1]}/${projectImages[projectNumber - 1][imagePage - 1]}.png`
    projectDescription.innerText = descriptions[projectNumber - 1]
    imageNumber.innerText = `Image ${imagePage} of ${projectImages[projectNumber - 1].length}`
    github.href = readmes[projectNumber - 1]
    deploy.href = deploys[projectNumber - 1]

}

function changeImage() {

    projectImage.src = `images/${projectNames[projectNumber - 1]}/${projectNames[projectNumber - 1]}${imagePage}.png`
    imageNumber.innerText = `Image ${imagePage} of ${projectImages[projectNumber - 1].length}`

}

// body.onclick = refactorCSS()

prevButton.onclick = () => {

    projectNumber = projectNumber > 1 ? projectNumber - 1 : 4
    changePage()

}

nextButton.onclick = () => {

    projectNumber = projectNumber < 4 ? projectNumber + 1 : 1
    changePage()

}

prevImage.onclick = () => {

    imagePage = imagePage > 1 ? imagePage - 1 : projectImages[projectNumber - 1].length
    changeImage()

}

nextImage.onclick = () => {

    imagePage = imagePage < projectImages[projectNumber - 1].length ? imagePage + 1 : 1
    changeImage()

}