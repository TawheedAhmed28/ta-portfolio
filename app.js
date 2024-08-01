const stylesheet = document.getElementById("stylesheet")
stylesheet.href = "main.css"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const body = document.querySelector("body")

const linkedin = document.getElementById("linkedin-svg")
const email = document.getElementById("email-svg")

const aboutMeDescription = document.getElementById("about-me-description")
const showMoreDescription = document.getElementById("show-about-me")

const prevButton = document.getElementById("previous-project")
const projectNumberText = document.getElementById("project-number")
const nextButton = document.getElementById("next-project")

const projectImage = document.getElementById("project-image")
const imageNumber = document.getElementById("image-indicator")
const prevImage = document.getElementById("prev-image")
const nextImage = document.getElementById("next-image")


window.onbeforeunload = () => { stylesheet.href = "index.css" }

window.onload = async () => {

    prevButton.classList.remove("duration-400")
    nextButton.classList.remove("duration-400")
    prevButton.classList.add("delay-[2000ms]", "duration-1000")
    nextButton.classList.add("delay-[2000ms]", "duration-1000")

    prevImage.classList.remove("duration-400")
    nextImage.classList.remove("duration-400")
    prevImage.classList.add("delay-[2200ms]", "duration-1000")
    nextImage.classList.add("delay-[2200ms]", "duration-1000")

    github.classList.remove("duration-400")
    deploy.classList.remove("duration-400")
    github.classList.add("delay-[2300ms]", "duration-1000")
    deploy.classList.add("delay-[2300ms]", "duration-1000")

    linkedin.classList.remove("duration-400")
    email.classList.remove("duration-400")
    linkedin.classList.add("delay-[900ms]", "duration-1000")
    email.classList.add("delay-[900ms]", "duration-1000")

    showMoreDescription.classList.remove("duration-400")
    showMoreDescription.classList.add("delay-1000", "duration-1000")

    await sleep(2300)
    refactorCSS()

}


let projectNumber = 1
let imagePage = 1

const projectNames = ["Wordle", "Chilli", "Games", "Pizza"]
projectNumberText.innerText = `Project ${projectNumber} of 4`
projectImage.src = `images/${projectNames[projectNumber - 1]}/${projectNames[projectNumber - 1]}${imagePage}.png`

const descriptions = [

    "Wordle - solo project, 1 week\nTechnologies: HTML, CSS, JavaScript\n\nI built a game from a given list using the technologies above. I decided on Wordle as I was already very familiar with the game. The functionality of checking the win criteria proved very challenging, so it allowed me to greatly expand my knowledge of JavaScript and HTML.",

    "Capsaicin Station - solo project, 1 week\nTechnologies: EJS, CSS, JavaScript, MongoDB\n\nFull stack MEN app with CRUD functionality - I created an app where users can post and see information about chillies. I used two models, a user model and a chilli model, which was embedded within the user model to allow for each chilli to have “owners”.",

    "Joystickipedia - paired project, 1 week\nTechnologies: JSX, JavaScript, React, CSS (Tailwind), React Select\n\nFull stack MERN app with CRUD functionality. Users can post games, and add them to a drop down list of genres. On each game, users can also add reviews. For this project, I focused more on the front end, and especially on review functionality. I wanted to allow users to provide a star rating, so using React.js to allow star emojis to represent rating values, and Tailwind to alter the opacity of the stars, I was able to create an easy to understand user interface for doing so.",

    "Pizza Delivery - solo project, 1 week\nTechnologies: Python, Django, React, CSS (Tailwind), React Select, JSX, Postgres\n\nFull stack Python-Django-SQL app with CRUD functionality. Users can post pizzas and add toppings to them from a drop down menu. Users can also post pizza orders, which also have CRUD functionality."

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

    github.classList.remove("delay-[2300ms]", "duration-1000")
    deploy.classList.remove("delay-[2300ms]", "duration-1000")
    github.classList.add("duration-400")
    deploy.classList.add("duration-400")

    linkedin.classList.remove("delay-[900ms]", "duration-1000")
    email.classList.remove("delay-[900ms]", "duration-1000")
    linkedin.classList.add("duration-400")
    email.classList.add("duration-400")

    showMoreDescription.classList.remove("delay-1000", "duration-1000")
    showMoreDescription.classList.add("duration-400")

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

function changeDescription() {

    const lessDesc = `I first got an interest in coding since I first started gaming, I guess - I just didn't realise it at the time but I'd always been exploring with and messing with different aspects of games, like for example what each item in a game does.Now I understand games better than before, so when I looked at game mods or game files, I could make some sense of them, even before starting the Software Engineering Bootcamp at General Assembly. I had no knowledge of coding, but I sure had knowledge of games, and I could use that knowledge to know what the code does.Once I realised that this - the concept of trial and error and always messing with things until they do what you want them to - was essentially coding, I was determined to learn how to code and find a career in it... <span class="cursor-pointer transition opacity-100 translate-y-2 duration-1000 delay-1000 font-thin text-purple-400 text-[20px] underline hover:text-green-500" id="show-about-me">show more</span>`

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