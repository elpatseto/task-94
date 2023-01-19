import "./scss/app.scss";
import Application from "./js/Application";
import {logPlugin} from "@babel/preset-env/lib/debug";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests

  app.setEmojis = (arr) => {
    const div = document.getElementById("emojis");
    div.innerHTML="";

    arr.forEach((monkey) => {
      let p = document.createElement("p");
      p.textContent = monkey;
      div.append(p);
    });
  }

  app.addBananas = (arr) => {
    let addBananas = arr.map((monkey) => {
      return monkey += " + banana";
    });
    app.setEmojis(addBananas);
  }




  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas(["🐒", "🦍", "🦧"]);
  window.__JS_APP = app;
});
