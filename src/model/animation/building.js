import Elevator from "./elevator";
import Line from "./line";

export default class Building {
    constructor(numFloors, numElevators) {
        this.timer = 0;
        this.numFloors = numFloors;
        this.numElevators = numElevators;

        this.elevators = new Array(numElevators);
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(this.numFloors, 0))
        }

        this.lines = new Array(numFloors);
        for (let i = 0; i < numFloors; i++) {
            this.lines.push(new Line());
        }
    }

    addRandomPerson() {
        var start = Math.floor(Math.random() * this.numFloors);
        var desired = Math.floor(Math.random() * (this.numFloors - 1));
        desired += start <= desired;
        this.lines[start].addPerson(start, desired, this.timer);
    }

    loadElevator(elevator) {
        var floor = elevator.currentFloor;
        var numCanLoad = elevator.space;
        var personsToLoad = this.lines[floor].getPersonsToLoad(elevator.direction, numCanLoad);
        elevator.load(personsToLoad);
    }

    unloadElevator(elevator) {
        elevator.unload()
    }

    start() {
        if (!this.timer) {
            this.timer = setInterval(() => { this.mainLoop() }, 100);
        }
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    mainLoop() {
        this.updateModel();

        this.timer += 1;
    }

    updateModel() {
    }
}