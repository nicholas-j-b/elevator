import ElevatorView from "./elevatorView";

export default class BuildingView {
    constructor(building, buildingPlan, renderVals) {
        this.building = building;
        this.plan = buildingPlan;
        this.elevators = [];
        for (let i = 0; i < buildingPlan.numElevators; i++) {
            this.elevators.push(new ElevatorView(
                renderVals.scale, 
                renderVals.elevator.height, 
                renderVals.elevator.width, 
                i * renderVals.elevator.spacing, 
                renderVals.elevator.startHeight,
                renderVals.elevator.colour[i % renderVals.elevator.colour.length]
                ));
        }
    }

    render(ctx) {
        for (let elevator in this.elevators) {
            elevator.render(ctx);
        }
    }

}