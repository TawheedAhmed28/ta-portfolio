const stylesheet = document.getElementById("stylesheet")
stylesheet.href = "main.css"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const body = document.querySelector("body")

const linkedin = document.getElementById("linkedin-svg")
const email = document.getElementById("email-svg")

const aboutMe = document.getElementById("about-me")
const aboutMeDescription = document.getElementById("about-me-description")
let showMoreDescription = document.getElementById("show-about-me")

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

let descriptionExtended = false
function changeDescription() {

    const lessDesc = `My interest in coding began with my early experiences in gaming, though I didn't realise it at the time. I was constantly exploring and experimenting with different aspects of games, such as understanding the functionality of various in-game items. As my comprehension of games deepened, I found myself able to make sense of game mods and files, even before I embarked on the Software Engineering Bootcamp at General Assembly. While I had no formal knowledge of coding, my extensive familiarity with games allowed me to intuitively grasp the purpose of the code. Recognising that the principles of trial and error and continuous experimentation - core aspects of gaming - were also fundamental to coding, I became determined to learn how to code and pursue a career in this field. <a class="cursor-pointer transition opacity-100 translate-y-2 duration-1000 delay-1000 font-thin text-purple-400 text-[20px] underline hover:text-green-500" id="show-about-me" href="#about-me">show more</a>`

    const moreDesc = `I had been pursuing a career in software engineering for most of my life - I just hadn't realised it. So, just how does one prime themselves for a lifetime of coding without giving it a thought, let alone writing any code?

    It turns out the answer lies in my general thought process! I've always loved breaking everything down into steps and processes, even down to imagining a progress bar while I drink my morning coffee... that thought process brought me to gaming at a very young age.

    <br>
    <div class="flex flex-col items-center">
    <img src="images/elementor-placeholder-image.webp" class="rounded-xl md:max-w-[720px] opacity-100 transition duration-1000 translate-y-2 mt-4 mb-6">
    </div>

    Gaming very quickly became my life, and it still very much is. I have always been drawn towards strategy games as, again, I enjoyed honing my problem solving skills, and getting a little rush of happiness with each solved problem!

    <br><br>

    At the age of 19, things became tough for me... many health problems left me in a difficult situation, but they also taught me that it was okay to wait for the right opportunity, and it would come by, sooner or later. <br><br>

   The opportunity came by after some unproductive brainstorming, when I sat with my dad to talk about my future after recovery, and a passing comment from my dad gave me an epiphany - "well, you game a lot, so why not learn about how the stuff you use all day works?" <br><br>

    I then found the Software Engineering Bootcamp at General Assembly, and didn't look back. That takes me to now, with a good understanding of various programming languages and concepts. <br><br>

    I've always heard the saying, "if you love what you do, you'll never work a day in your life", but after finally finding my 'thing' in software engineering, I'd argue that the saying is just not true. Coding is hard work, but I really enjoy it. So instead, how about... "if you love what you do, you'll work as hard as you can to keep doing it"? <br><br>

    I'm really looking forward to what the future holds for me as a software engineer, but maybe that's because I know the future holds more code :) <br><br>

    <span class="text-purple-400 text-[22px]">Aside from coding, I have other interests too:</span><br><br>

    <span class="text-purple-300">Gaming</span> - Obviously. It's the reason why I'm entering this field of work! There's so much variety with games, it's practically impossible to be bored.<br>

    <span class="text-purple-300">Football</span> - I've always been around a family of football fans, so I watch football and also play, though I'm no athlete :/<br>

    <span class="text-purple-300">Gardening</span> - I spend a lot of time in front of a screen so gardening is a nice outdoor hobby of mine. I love watching things grow and develop into something amazing and useful, thanks to the hard work I put in, whether that be plants or code!<br>

    <a class="cursor-pointer transition opacity-100 translate-y-2 duration-1000 delay-1000 font-thin text-purple-400 text-[20px] underline hover:text-green-500" id="show-about-me" href="#about-me">show less</a>`

    descriptionExtended = !descriptionExtended
    aboutMeDescription.innerHTML = descriptionExtended ? moreDesc : lessDesc
    aboutMe.innerText = descriptionExtended ? "A little bit more about me..." : "A little bit about me..."

    showMoreDescription = document.getElementById("show-about-me")
    refactorCSS()
    showMoreDescription.onclick = () => changeDescription()

}

showMoreDescription.onclick = () => changeDescription()

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