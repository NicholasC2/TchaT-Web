const navbar = document.querySelector(".sidebar")

class NavProfile {
    constructor(name = "Failed to load profile name.", status = { color: "red", text: "Failed to load profile status." }, profile_image_url = "https://cdn-icons-png.flaticon.com/256/12225/12225881.png") {
        this.name = name;
        this.status = status;
        this.profile_image_url = profile_image_url;
    }

    createElement() {
        const div = document.createElement("div")
        div.className = "sidebar-user"

        div.innerHTML = `
        <img
            class="sidebar-user__avatar"
            src="${this.profile_image_url}"
            alt="${this.name}"
        >

        <div class="sidebar-user__content">
            <strong class="sidebar-user__name">
                ${this.name}
            </strong>

            <div class="sidebar-user__status">
                <span
                    class="status-indicator"
                    style="background:${this.status.color}"
                ></span>

                <span>${this.status.text}</span>
            </div>
        </div>`

        return div
    }
}

for(let i = 0; i < 100; i++) {
    const profile = new NavProfile("test"+i, Math.random() > 0.5 ? {color: "red", text: "Offline"} : {color: "green", text: "Online"});

    navbar.appendChild(profile.createElement())
}