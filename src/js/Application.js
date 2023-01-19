import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  setEmojis(emojis) {

    let div = document.getElementById("emojis");
    div.innerHTML="";

    this.emojis = emojis;

    emojis.forEach((monkey) => {
      let p = document.createElement("p");
      p.textContent = monkey;
      div.append(p);
    });
  }

  addBananas() {
    let addBanana = this.emojis.map((monkey) => {
      return monkey += this.banana;
    });
   this.setEmojis(addBanana);
  }
}








