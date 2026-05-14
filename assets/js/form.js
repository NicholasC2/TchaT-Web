const registerForm = document.querySelector(".form-register");

if(!registerForm) {
    const loginForm = document.querySelector(".form-login")

    if(!loginForm) return;

    const usernameInput = loginForm.querySelector("input.username")

    loginForm.addEventListener("keypress", (event)=>{
        if(event.key == "Enter") {

        }
    })
} else {
    const usernameInput = loginForm.querySelector("input.username")

    registerForm.addEventListener("keypress", (event)=>{
        if(event.key == "Enter") {
            
        }
    })
}