import AlgorithmController from "../../../../controller/src/main/js/algorithm_controller";

export default class AlgorithmService {
    constructor(building) {
        this.building = building;
    }

    loadAllPossible(elevator) {
        return AlgorithmController.loadAllPossible(this.building, elevator);
    }

    unloadAllAtDestination(elevator) {
        return AlgorithmController.unloadAllAtDestination(this.building, elevator);
    }

    setTargetFloor(elevator, floor) {
        return AlgorithmController.setTargetFloor(this.building, elevator, floor);
    }

    setElevatorDirection(elevator, direction) {
        return AlgorithmController.setElevatorDirection(this.building, elevator, direction);
    }
}