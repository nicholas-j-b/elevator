import { Direction } from '../config/cfg.js';

export default class Elevator {
    constructor(upperLimit, lowerLimit, maxSpace, completedPersons, speed) {

        this.upperLimit = upperLimit;
        this.lowerLimit = lowerLimit;
        this.maxSpace = maxSpace;
        this.persons = new Set(); // objects of { people, ...}
        this.currentFloor = 0;
        this.currentDirection = Direction.UP;
        this.completedPersons = completedPersons;
        this.speed = speed;
        this.y = 0;
        this.x = 0;
    }

    load(personsToLoad) {
        for (let person in personsToLoad){
            this.persons.add(person);
        }
    }

    unload() {
        this.persons.forEach(
            (person) => {
                if (this.currentFloor == person.desiredFloor) {
                    this.completedPersons.push(person);
                    this.persons.delete(person);
                }
            }
        )
    }

    move() {
        if (this.currentDirection == Direction.UP) {
            this.currentFloor += 1;
        } else {
            this.currentFloor -= 1;
        }
    }

    set desiredFloor(newFloor) {
        this.desiredFloor = newFloor;
        this.currentDirection = ((newFloor > this.currentFloor) ? Direction.UP : Direction.DOWN);
    }

    get numPeople() {
        return this.persons.size;
    }

    get space() {
        return this.maxSpace - this.numPeople;
    }

    debug_move() {
        this.y += this.speed;
    }
}