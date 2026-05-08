const ws = new WebSocket("ws://127.0.0.1:8080")

let heartbeatInterval;

ws.onmessage = (msg)=>{
    console.log(msg)
}

ws.onopen = ()=>{
    heartbeatInterval = setInterval(()=>{
        ws.send(JSON.stringify({t:0}))
    }, 25000)
}

const navbar = document.querySelector(".navbar")
const tooltip = document.createElement("div")
tooltip.className = "tooltip"

class NavProfile {
    constructor(name = "Failed to load profile name.", status = { color: "red", text: "Failed to load profile status." }, profile_image_url = "https://cdn-icons-png.flaticon.com/256/12225/12225881.png") {
        this.name = name;
        this.status = status;
        this.profile_image_url = profile_image_url;
    }

    toHTML() {
        return `<div class="navitem"><img class="icon" src="${this.profile_image_url}"><br></div>`
    }
}

for(let i = 0; i < 100; i++) {
    const profile = new NavProfile("test");

    const profileHTML = document.createElement("div")
    navbar.appendChild(profileHTML)
    profileHTML.outerHTML = profile.toHTML()
}

document.addEventListener("mouseover", (event) => {
    console.log(event.target)
})