import ElevatorAlgorithm from './elevator_algorithm'

export default class ObeyFirst extends ElevatorAlgorithm {
    constructor(setupDto, algorithmService) {
        super(algorithmService);
        this.elevators = [];
        for (let elevator of setupDto.elevators) {
            this.elevators.push({
                currentFloor: elevator.currentFloor,
                minFloor: elevator.minFloor,
                maxFloor: elevator.maxFloor,
                capacity: elevator.capacity,
                persons: [{}],
                goal: {
                    workingOn: false,
                    load: {
                        complete: false,
                        floor: 0
                    },
                    unload: {
                        complete: false,
                        floor: 0
                    }
                }
            })
        }
        this.numFloors = setupDto.numFloors;
        this.persons = [];
    }

    interpretStatus(statusDto) {
        console.log(statusDto);
    }

    announceDirection(elevator) {
        let direction = elevator.goal.load.floor > elevator.goal.unload.floor ? this._direction.DOWN : this._direction.UP;
        this.algorithmService.setElevatorDirection(elevator, direction);
    }

    getElevatorGoal(elevator) {
        if (elevator.persons.length != 0) {
            let goal = {
                workingOn: true,
                load: {
                    complete: true,
                    floor: null
                },
                unload: {
                    complete: false,
                    floor: elevator.persons[0].desiredFloor
                }
            }
            return goal;
        } else if (this.persons.length == 0) {
            return elevator.goal;
        } else {
            let person = this.persons.shift()
            let goal = {
                workingOn: true,
                load: {
                    complete: false,
                    floor: person.currentFloor
                },
                unload: {
                    complete: false,
                    floor: person.desiredFloor
                }
            }
            this.announceDirection(elevator);
            return goal;
        }
    }

    enactElevatorGoal(elevator) {
        if (!elevator.goal.load.complete) {
            if (elevator.currentFloor == elevator.goal.load.floor) {
                this.algorithmService.loadAllPossible(elevator);
            } else {
                this.algorithmService.setTargetFloor(elevator, elevator.goal.load.floor);
            }
        } else {
            if (elevator.currentFloor == elevator.goal.unload.floor) {
                this.algorithmService.unloadAllAtDestination(elevator);
                elevator.goal.workingOn = false;
            } else {
                this.algorithmService.setTargetFloor(elevator, elevator.goal.unload.floor);
            }
        }
    }

    update(statusDto) {
        this.interpretStatus(statusDto);
        for (let elevator of this.elevators) {
            if (!elevator.goal.workingOn) {
                elevator.goal = this.getElevatorGoal(elevator);
            }
            if (elevator.goal.workingOn) {
                this.enactElevatorGoal(elevator);
            }
        }
    }
}