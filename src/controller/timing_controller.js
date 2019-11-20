export default class TimingController {
    static startTimer(buildingView) {
        let clock = setInterval(() => { buildingView.update() }, 100);
        return {
            clock: clock,
            running: true
        }
    }

    static resumeTimer(timingObject, buildingView) {
        timingObject.clock = setInterval(() => { buildingView.update() }, 100);
        timingObject.running = true;
    }

    static stopTimer(timingObject) {
        clearInterval(timingObject.clock);
        timingObject.running = false;
    }

    static start(timingObject) {
        if (!timingObject.clock) {
            return this.startTimer(timingObject);
        }
    }

    static pause(timingObject, buildingView, paused) {
        if (paused && timingObject.clock && !timingObject.running) {
            this.resumeTimer(timingObject, buildingView);
            return true;
        } else if (timingObject.clock && timingObject.running) {
            this.stopTimer(timingObject);
            return true;
        }
        return false;
    }

    static stop(timingObject, buildingView) {
        this.stopTimer(timingObject);
        timingObject.clock = null;
        buildingView.reset()
    }
}