(async () => {

    const darkButton = document.getElementById("darkButton");

    // Take active tabs:
    const tabs = await chrome.tabs.query({ active: true });

    // Take current url:
    const url = new URL(tabs[0].url);

    // Take tab id:
    const tabId = tabs[0].id;

    // Set button text:
    darkButton.innerHTML = "Dark " + url.host;

    // Register button click:
    darkButton.addEventListener("click", async () => {

        // Execute script:
        await chrome.scripting.executeScript({ target: { tabId }, files: ["/content/content.js"] });

    });

})();