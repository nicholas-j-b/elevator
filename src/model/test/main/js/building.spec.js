import Building from '../../../src/main/js/animation/building'
import { JestEnvironment } from '@jest/environment';

describe('Building-Model', function() {
    let buildingPlan = {
        numFloors: 5
    }
    let building = new Buillding(buildingPlan);

    describe('Busy', function() {
        beforeAll(function() {
        })
        it('default', function() {
            expect(true).toBe(true)
        });
        afterAll(function() {
        })
    })
})
