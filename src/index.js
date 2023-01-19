import "./scss/app.scss";
import Application from "./js/Application";
import {logPlugin} from "@babel/preset-env/lib/debug";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests

  const div = document.getElementById("emojis");


  app.setEmojis = (arr) => {
    arr.forEach((monkey) => {
      let p = document.createElement("p");
      p.textContent = monkey;
      div.append(p);
    });
  }

  app.addBananas = (arr) => {
    div.innerHTML="";
    const addBananas = arr.map((x) => {
      let p = document.createElement("p");
      p.textContent = x + " + banana";
      div.append(p);
    });

  }

  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas(["🐒", "🦍", "🦧"]);
  window.__JS_APP = app;
});
