const settings = loadSettings()

const ws = new WebSocket(settings.serverIP)

showAlert("error", "error")

ws.onerror = (error)=>{
    showAlert("error", error)
}