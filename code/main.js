import Manager from "./classes/manager.js";

const mainCanvas = document.querySelector('#main-canvas');
mainCanvas.width = 1000;
mainCanvas.height = 600;
const mainCtx = mainCanvas.getContext('2d');

const manager = new Manager(mainCanvas, mainCtx);

manager.init();