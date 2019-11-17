import Elevator from "./elevator";
import Line from "./line";

export default class Building {
    constructor(args) {
        this.timer = 0;
        this.clock = null;
        this.running = false;
        this.numFloors = args.numFloors || 3;
        this.numElevators = args.numElevators || 3;
        this.elevatorMaxSpace = args.elevator.maxSpace || 10;
        this.completedPersons = [];

        console.log('debug point');

        this.elevators = new Array(this.numElevators);
        for (let i = 0; i < this.numElevators; i++) {
            this.elevators.push(new Elevator(this.numFloors, 0, 
                this.elevatorMaxSpace, this.completedPersons));
        }

        this.lines = new Array(this.numFloors);
        for (let i = 0; i < this.numFloors; i++) {
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

    //TODO most of this timer logic belongs in controller
    // back end 'ticks' independent of time
    // controller should advance these ticks relative
    // to its animation clock
    startTimer() {
        this.clock = setInterval(() => { this.mainLoop() }, 100);
        this.running = true;
    }

    stopTimer() {
        clearInterval(this.clock);
        this.running = false;
    }

    start() {
        if (!this.clock) {
            this.startTimer();
        }
    }

    pause(paused) {
        if (paused && this.clock && !this.running) {
            this.startTimer();
            return true;
        } else if (this.clock && this.running) {
            this.stopTimer();
            return true;
        }
        return false;
    }

    stop() {
        this.stopTimer();
        this.timer = 0;
        this.clock = null;
    }

    mainLoop() {
        this.updateModel();
        console.log(this.timer);

        this.timer += 1;
    }

    updateModel() {
    }
}