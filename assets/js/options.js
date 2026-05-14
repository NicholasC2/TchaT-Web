const defaultSettings = {
    serverIP: "wss://localhost:8080"
};

function saveSettings(settings) {
    localStorage.setItem("settings", JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem("settings");

    if (saved) {
        return JSON.parse(saved);
    }

    saveSettings(defaultSettings);
    return defaultSettings;
}