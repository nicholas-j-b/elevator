export default class ElevatorView {
    constructor(scale, height, width, x, y, colour, master) {
        this.scale = scale || 1;
        this.height = height * scale || 30 * scale;
        this.width = width * scale || 10 * scale;
        this.x = x || 0;
        this.y = y || 0;
        this.colour = colour || '#F00';
        this.master = master;
    }

    setPosition(x, y) {
        this.y = y;
    }

    render(ctx) {
        this.setPosition(this.master.x, this.master.y);
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}