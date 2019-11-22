export default class PersonView {
    constructor(scale, height, width, x, y, colour, master) {
        this.scale = scale;
        this.height = height;
        this.width = width;
        this.x = x || 0;
        this.y = y || 0;
        this.colour = colour || '#F00';
        this.master = master;
    }

    updatePosition() {

    }

    render(ctx) {
        this.updatePosition();
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}