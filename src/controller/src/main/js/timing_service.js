export default class TimingService {
    constructor(buildingView, algorithmService, algorithm) {
        this.buildingView = buildingView;
        this.algorithmService = algorithmService; // redundant?
        this.algorithm = algorithm;
    }

    update() {
        let statusDto = this.buildingView.building.getStatus();
        this.algorithm.update(statusDto);
        this.buildingView.update();
    }

    reset() {

    }

}