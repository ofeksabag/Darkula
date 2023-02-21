var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(this, void 0, void 0, function* () {
    const darkButton = document.getElementById("darkButton");
    // Take active tabs:
    const tabs = yield chrome.tabs.query({ active: true });
    // Take current url:
    const url = new URL(tabs[0].url);
    // Take tab id:
    const tabId = tabs[0].id;
    // Set button text:
    darkButton.innerHTML = "Dark " + url.host;
    // Register button click:
    darkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        // Execute script:
        yield chrome.scripting.executeScript({ target: { tabId }, files: ["/content/content.js"] });
    }));
}))();
