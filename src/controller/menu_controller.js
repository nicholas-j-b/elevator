import Building from "../model/animation/building";
import BuildingView from "../view/animation/buildingView";
import TimingController from "./timing_controller";

export default class MenuController {
    static create(buildingPlan, renderVals) {
        let building = new Building(buildingPlan);
        let buildingView = new BuildingView(building, buildingPlan, renderVals)
        return {
            building: building,
            buildingView: buildingView
        };
    }

    static start(buildingView) {
        return TimingController.start(buildingView);
    }

    static stop(timingObject, buildingView) {
        TimingController.stop(timingObject, buildingView);
    }

    static pause(timingObject, buildingView, paused) {
        return TimingController.pause(timingObject, buildingView, paused);
    }
}