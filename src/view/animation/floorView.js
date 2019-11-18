export default class FloorView {
    constructor(scale, height, width, x, y, colour, lineMaster) {
        this.scale = scale || 1;
        this.height = height * scale || 35 * scale;
        this.width = width * scale || 100 * scale;
        this.x = x || 0;
        this.y = y || 0;
        this.colour = colour || '#F00';
        this.master = master;
        this.line = new LineView(lineMaster);
    }

    updatePosition() {

    }

    render(ctx) {
        this.updatePosition();
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.renderPersons(ctx);
    }
    
}