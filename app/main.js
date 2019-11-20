import DwarfsController from "./Controllers/DwarfsController.js";

class App {
  dwarfsController = new DwarfsController();
}

window["app"] = new App();
