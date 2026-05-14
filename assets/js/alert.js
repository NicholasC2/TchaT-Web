const app = document.querySelector(".app")

const alertContainer = document.createElement("div")
alertContainer.className = "alert-container"

app.appendChild(alertContainer)

function showAlert(color, text) {
    let alertElem = document.createElement("div")
    alertElem.className = "popup-alert"

    alertElem.className += " alert-"+color;
    alertElem.innerHTML = text;

    alertElem.style.opacity = 5;

    let mousehovering = false;

    alertElem.addEventListener("mouseenter", ()=>{
        mousehovering = true;
    })

    alertElem.addEventListener("mouseleave", ()=>{
        mousehovering = false;
    })

    alertContainer.appendChild(alertElem)

    const interval = setInterval(()=>{
        alertElem.style.opacity -= 0.025

        if(mousehovering) alertElem.style.opacity = 5;

        if(alertElem.style.opacity <= 0) {
            clearInterval(interval)
            alertElem.remove()
        }
    }, 16)
}