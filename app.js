const stylesheet = document.getElementById("stylesheet")
stylesheet.href = "main.css"

window.onbeforeunload = () => {stylesheet.href = "index.css"}