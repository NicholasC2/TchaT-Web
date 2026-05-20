const registerForm = document.querySelector(".form-register");

if(!registerForm) {
    const loginForm = document.querySelector(".form-login")

    if(loginForm) {
        const usernameInput = loginForm.querySelector("input.username")
        
        const submitButton = loginForm.querySelector(".submit")

        setInterval(()=>{
            if(SERVER_CONNECTED) {
                submitButton.disabled = false;
            }
        }, 100)
    
        loginForm.addEventListener("keypress", (event)=>{
            if(event.key == "Enter") {
                
            }
        })
    }
} else {
    const usernameInput = registerForm.querySelector("input.username")

    const submitButton = registerForm.querySelector(".submit")

    setInterval(()=>{
        if(SERVER_CONNECTED) {
            submitButton.disabled = false;
        }
    }, 100)
    
    registerForm.addEventListener("keypress", (event)=>{
        if(event.key == "Enter") {
            
        }
    })
}