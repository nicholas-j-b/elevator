import Building from "../model/animation/building";
import BuildingView from "../view/animation/buildingView";

export default class MenuController {
    create(buildingPlan, renderVals) {
        let building = new Building(buildingPlan);
        let buildingView = new BuildingView(building, buildingPlan, renderVals)
        return {
            building: building,
            buildingView: buildingView
        };
    }

    start(building) {
        building.start();
    }

    stop(building) {
        building.stop();
    }

    pause(building, paused) {
        return building.pause(paused);
    }
}