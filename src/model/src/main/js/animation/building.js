import Elevator from "./elevator";
import Line from "./line";
import { EventBus } from '../../../../../main'

export default class Building {
    constructor(buildingPlan) {
        this.time = 0;
        this.numFloors = buildingPlan.numFloors || 3;
        this.numElevators = buildingPlan.numElevators || 3;
        this.completedPersons = [];

        this.elevators = [];
        for (let i = 0; i < this.numElevators; i++) {
            this.elevators.push(new Elevator(this.numFloors, 0, 
                buildingPlan.elevators[i].capacity, this.completedPersons,
                buildingPlan.elevators[i].speed));
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
        this.lines[start].addPerson(start, desired, this.time);
    }

    loadElevator(elevator) {
        var floor = elevator.currentFloor;
        var numCanLoad = elevator.space;
        var personsToLoad = this.lines[floor].getPersonsToLoad(elevator.direction, numCanLoad);
        return elevator.load(personsToLoad);
    }

    unloadElevator(elevator) {
        elevator.unload()
    }

    reset() {
        this.time = 0;
        for (let elevator of this.elevators) {
            elevator.debug_reset();
        }
    }

    update() {
        for (let elevator of this.elevators) {
            elevator.debug_move();
        }

        EventBus.$emit('animation-rerender');
        this.time += 1;
    }

    loadAllPossible(elevatorIndex) {
        let elevator = this.elevators[elevatorIndex];
        return this.loadElevator(elevator);
    }

    unloadAllAtDestination(elevator) {
        return this.unloadElevator(elevator);
    }

    setTargetFloor(elevator, targetFloor) {
        if (this.targetFloor == targetFloor) {
            return false;
        }
        this.targetFloor = targetFloor;
        return true;
    }

    getStatus() {
        return {};
    }
}