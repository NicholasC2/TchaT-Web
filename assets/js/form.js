const registerForm = document.querySelector(".form-register");

if(!registerForm) {
    const loginForm = document.querySelector(".form-login")

    if(loginForm) {
        const usernameInput = loginForm.querySelector("input.username")
        
        const submitButton = loginForm.querySelector("input.submit")

        setInterval(()=>{
            if(SERVER_CONNECTED) {
                submitButton.ariaDisabled = false;
            }
        }, 100)
    
        loginForm.addEventListener("keypress", (event)=>{
            if(event.key == "Enter") {
                
            }
        })
    }
} else {
    const usernameInput = loginForm.querySelector("input.username")

    const submitButton = loginForm.querySelector("input.submit")

    setInterval(()=>{
        if(SERVER_CONNECTED) {
            submitButton.ariaDisabled = false;
        }
    }, 100)
    
    registerForm.addEventListener("keypress", (event)=>{
        if(event.key == "Enter") {
            
        }
    })
}