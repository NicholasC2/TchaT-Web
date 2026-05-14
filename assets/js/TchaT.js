const settings = loadSettings()

const ws = new WebSocket(settings.serverIP)

const WS_ERROR_MESSAGES = {
    1001: "The server is going offline or you navigated away from the page.",
    1002: "Connection failed due to a protocol error.",
    1003: "The server received data it doesn't understand.",
    1005: "The connection closed without a specific status.",
    1006: "The connection was lost unexpectedly. Check your API server IP.",
    1007: "Received inconsistent or invalid data.",
    1008: "Connection refused due to a security policy violation.",
    1009: "The message sent was too large to process.",
    1010: "The connection was closed because the server missed a required extension.",
    1011: "The server encountered an internal error and had to disconnect.",
    1015: "Failed to establish a secure connection (TLS error)."
};

ws.onclose = (event) => {
    if (event.code !== 1000) {
        const friendlyMsg = WS_ERROR_MESSAGES[event.code] || "An unknown connection error occurred.";
        showAlert("error", friendlyMsg);
    }
};