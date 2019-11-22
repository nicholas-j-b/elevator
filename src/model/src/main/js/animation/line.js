import Person from "./person";
import { Direction } from "../config/cfg.js"

export default class Line {
    constructor() {
        this.persons = [];
        this.persons[Direction.UP] = [];
        this.persons[Direction.DOWN] = [];
    }

    newPersonJoinsTheLine(start, desired, startTime) {
        var key;
        if (start > desired) {
            key = Direction.DOWN;
        } else {
            key = Direction.UP;
        }
        this.persons[key].push(new Person(start, desired, startTime));
    }

    getPersonsToLoad(direction, numCanLoad) {
        return this.persons[direction].splice(0, numCanLoad);
    }
}