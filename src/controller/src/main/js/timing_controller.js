export default class TimingController {
    static startTimer(timingObject) {
        timingObject.clock = setInterval(() => { timingObject.timingService.update() }, 100);
        timingObject.running = true;
    }

    static resumeTimer(timingObject) {
        timingObject.clock = setInterval(() => { timingObject.timingService.update() }, 100);
        timingObject.running = true;
    }

    static stopTimer(timingObject) {
        clearInterval(timingObject.clock);
        timingObject.running = false;
    }

    static start(timingObject) {
        if (!timingObject.clock) {
            this.startTimer(timingObject);
        }
    }

    static pause(timingObject, paused) {
        if (paused && timingObject.clock && !timingObject.running) {
            this.resumeTimer(timingObject);
            return true;
        } else if (timingObject.clock && timingObject.running) {
            this.stopTimer(timingObject);
            return true;
        }
        return false;
    }

    static stop(timingObject) {
        this.stopTimer(timingObject);
        timingObject.clock = null;
        timingObject.timingService.reset()
    }
}