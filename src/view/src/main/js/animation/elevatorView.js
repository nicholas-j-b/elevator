export default class ElevatorView {
    constructor(scale, height, width, x, y, colour, master) {
        this.scale = scale || 1;
        this.height = height * scale || 10 * scale;
        this.width = width * scale || 4 * scale;
        this.x = x || 0;
        this.y = y || 0;
        this.colour = colour || '#F00';
        this.master = master;
        this.persons = [];
    }

    updatePosition() {
        this.y = this.master.y;
    }

    render(ctx) {
        this.updatePosition();
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.renderPersons(ctx);
    }

    renderPersons(ctx) {
        for (let person of this.persons) {
            person.render(ctx);
        }
    }
}