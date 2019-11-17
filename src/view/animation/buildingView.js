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
                renderVals.elevator.colour[i % renderVals.elevator.colour.length],
                this.building.elevators[i]
                ));
        }
    }

    render(ctx) {
        ctx.fillStyle = '#FFFF00';
        ctx.rect(0, 0, 1000, 100);
        //ctx.fill();
        for (let elevator of this.elevators) {
            elevator.render(ctx);
        }
    }

}