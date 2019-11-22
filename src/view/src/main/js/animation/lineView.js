export default class LineView {
    constructor(master) {
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