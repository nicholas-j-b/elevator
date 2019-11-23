export default class Person {
    constructor(startFloor, desiredFloor, startTime) {
        this.startFloor = startFloor;
        this.desiredFloor = desiredFloor;
        this.startTime = startTime;

        this.totalTime = null;
    }
}