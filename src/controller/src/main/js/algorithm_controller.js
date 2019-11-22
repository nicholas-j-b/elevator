export default class AlgorithmController {
    static loadAllPossible(building, elevator) {
        return building.loadAllPossible(elevator);
    }

    static unloadAllAtDestination(building, elevator) {
        return building.unloadAllAtDestination(elevator);
    }

    static setTargetFloor(building, elevator, floor) {
        return building.setTargetFloor(elevator, floor);
    }

    static setElevatorDirection(building, direction) {
        return building.setElevatorDirection(elevator, direction);
    }
}