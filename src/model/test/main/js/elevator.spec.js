import Elevator from '../../../src/main/js/animation/elevator'

describe('Elevator-Model', function() {
    let elevator = new Elevator(0, 0, 0, new Set(), 0);

    describe('Busy', function() {
        beforeAll(function() {
            elevator.busy = true;
        })
        it('Does not load when busy', function() {
            expect(elevator.load()).toBeNull()
        });
        it('Does not unload when busy', function() {
            expect(elevator.unload()).toBeNull()
        });
        afterAll(function() {
            elevator.busy = false;
        })
    })
    describe('Loading', function() {
        beforeAll(function() {
            elevator.capacity = 10;
            elevator.busy = false;
        })
        it('Load passengers', function() {
            elevator.persons = new Set();
            let personsToLoad = [];
            for (let i = 0; i < 4; i++) {
                personsToLoad.push({
                    desiredFloor: i,
                    startTime: i
                })
            }
            expect(elevator.load(personsToLoad)).toBe(4);
        })
        it('Unload passengers', function() {
            elevator.currentFloor = 0;
            expect(elevator.unload()).toBe(1);
        })
    })
})
