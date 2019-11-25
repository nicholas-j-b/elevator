import { Direction } from '../config/cfg.js';

export default class Elevator {
    constructor(upperLimit, lowerLimit, capacity, completedPersons, speed) {
        this.upperLimit = upperLimit;
        this.lowerLimit = lowerLimit;
        this.capacity = capacity;
        this.persons = new Set(); // objects of { people, ...}
        this.currentFloor = 0;
        this.currentDirection = Direction.UP;
        this.completedPersons = completedPersons;
        this.speed = speed;
        this.y = 0;
        this.x = 0;
        this.busy = false;
    }

    load(personsToLoad) {
        if (this.busy) { return null; }
        let numberLoaded = 0
        for (let person of personsToLoad){
            if (this.space > 0) {
                this.persons.add(person)
                numberLoaded += 1;
            }
        }
        return numberLoaded;
    }

    unload() {
        if (this.busy) { return null; }
        let numberUnloaded = 0;
        this.persons.forEach(
            (person) => {
                if (this.currentFloor == person.desiredFloor) {
                    this.completedPersons.add(person);
                    this.persons.delete(person);
                    numberUnloaded += 1;
                }
            }
        )
        return numberUnloaded;
    }

    move() {
        //if (this.currentDirection == Direction.UP) {
            //this.currentFloor += 1;
        //} else {
            //this.currentFloor -= 1;
        //}
    }

    set desiredFloor(newFloor) {
        this.desiredFloor = newFloor;
        this.currentDirection = ((newFloor > this.currentFloor) ? Direction.UP : Direction.DOWN);
    }

    get numPeople() {
        return this.persons.size;
    }

    get space() {
        return this.capacity - this.numPeople;
    }

    debug_move() {
        this.y += this.speed;
    }

    debug_reset() {
        this.y = 0;
    }

    debug_test(x) {
        return x;
    }
}