import "./scss/app.scss";
import Application from "./js/Application";
import {logPlugin} from "@babel/preset-env/lib/debug";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests


  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  window.__JS_APP = app;
});
