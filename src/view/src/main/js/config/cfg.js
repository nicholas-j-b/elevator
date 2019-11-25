export const ELEVATOR_SPACING = 1;

export const DEFAULT_RENDER_VALS = {
    scale: 1,
    elevator: {
        height: 30,
        width: 10,
        spacing: 20,
        startHeight: 100,
        colour: ['#F00', '#0F0', '#00F']
    }
};

export const DEFAULT_BUILDING_PLAN = {
    numFloors: 4,
    numElevators: 3,
    elevators: [],
    DEFAULT_ELEVATOR: {
        capacity: 10,
        maxFloor: 4,
        minFloor: 0,
        currentFloor: 0,
        speed: 2
    }
};

export const DEFAULT_SETUP_DTO = {
    elevators: []
}