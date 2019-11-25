import Building from '../../../../model/src/main/js/animation/building'
import BuildingView from '../../../../view/src/main/js/animation/buildingView'
import TimingController from "./timing_controller";
import TimingService from './timing_service';

export default class MenuController {
    static create(buildingPlan, renderVals, algorithmService, algorithm) {
        let building = new Building(buildingPlan);
        let buildingView = new BuildingView(building, buildingPlan, renderVals)
        let timingService = new TimingService(buildingView, algorithmService, algorithm)
        return {
            building: building,
            buildingView: buildingView,
            timingObject: {
                timingService: timingService,
                clock: null,
                running: false
            }
        };
    }

    static start(timingObject) {
        TimingController.start(timingObject);
    }

    static stop(timingObject)  {
        TimingController.stop(timingObject);
    }

    static pause(timingObject, paused) {
        return TimingController.pause(timingObject, paused);
    }
}