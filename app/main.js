import GamesController from "./Controllers/GamesController.js";

class App {
  gamesController = new GamesController();
}

window["app"] = new App();
