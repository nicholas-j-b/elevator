import { Direction } from "../../../../model/src/main/js/config/cfg";

export default class ElevatorAlgorithm {
    constructor(algorithmService) {
        this._direction = Direction;
        this.algorithmService = algorithmService
    }

    entryPoint() {
        throw new Error("This is an abstract function!");
    }
}