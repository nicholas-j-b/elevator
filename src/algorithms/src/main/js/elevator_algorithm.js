import { Direction } from "../../../../model/src/main/js/config/cfg";

export default class ElevatorAlgorithm {
    constructor() {
        this._direction = Direction;
    }

    entryPoint() {
        throw new Error("This is an abstract function!");
    }
}