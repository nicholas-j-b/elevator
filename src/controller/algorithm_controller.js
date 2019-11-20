export default class AlgorithmController {
    static updateModel(building) {
        return building.update();
    }

    static loadAllPossible(building, elevator, direction) {
        return building.loadAllPossible(elevator, direction);
    }

    static unloadAllAtDestination(building, elevator) {
        return building.unloadAllAtDestination(elevator);
    }

    static moveElevator(building, elevator, floor) {
        return building.moveElevator(elevator, floor)
    }
}