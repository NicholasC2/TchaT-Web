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