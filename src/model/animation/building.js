export default class Building {
    w = 4;
    h = 2;

    timer = null;

    constructor(num) {
        this.num = num;
    }

    start() {
        if (!this.timer) {
            this.timer = setInterval(() => { this.mainLoop() }, 100);
        }
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    mainLoop() {
        this.updateModel();
    }

    updateModel() {
        this.w = this.w + 1;
        this.h = this.h + 1;
    }
}