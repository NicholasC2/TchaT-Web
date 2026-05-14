const app = document.querySelector(".app")

let alertElem = document.createElement("div")
alertElem.className = "popup-alert"

function showAlert(color, text) {
    alertElem.className += " alert-"+color;
    alertElem.innerHTML = text;

    alertElem.style.opacity = 5;

    app.appendChild(alertElem)

    const interval = setInterval(()=>{
        alertElem.style.opacity -= 0.1
    }, 16)

    if(alertElem.style.opacity <= 0) {
        clearInterval(interval)
        alertElem.remove()
    }
}