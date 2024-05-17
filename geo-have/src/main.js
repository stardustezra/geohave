import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { registerSW } from "virtual:pwa-register";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Register the service worker for PWA
registerSW({ immediate: true });

// PWA Installation Prompt Logic
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  const installButton = document.createElement("button");
  installButton.textContent = "Install App";
  installButton.style.position = "fixed";
  installButton.style.bottom = "10px";
  installButton.style.right = "10px";
  installButton.style.padding = "10px";
  installButton.style.backgroundColor = "#007BFF";
  installButton.style.color = "white";
  installButton.style.border = "none";
  installButton.style.borderRadius = "5px";
  installButton.style.cursor = "pointer";

  document.body.appendChild(installButton);

  installButton.addEventListener("click", async () => {
    installButton.style.display = "none";
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    deferredPrompt = null;
  });
}
