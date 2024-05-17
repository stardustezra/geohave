import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Create the Vue app
const app = createApp(App);

// Use Pinia and Router
app.use(createPinia());
app.use(router);

// Mount the app
app.mount("#app");

// PWA Installation Prompt Logic
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Optionally, you can show a custom install button
  showInstallPromotion();
});

const showInstallPromotion = () => {
  // Create and style the install button
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
    // Hide the install button
    installButton.style.display = "none";
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt = null;
  });
};
