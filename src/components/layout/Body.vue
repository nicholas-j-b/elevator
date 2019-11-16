<script>
import Building from '../../animation/building.js'

export default {
    inject: ['provider'],
    props: {
        size: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            building: new Building()
        }
    },
    render() {
        if(!this.provider.context) return null;
        const ctx = this.provider.context;
        console.log(ctx);
        ctx.rect(this.building.w, this.building.h, this.size, this.size);
        ctx.fillStyle = '#F00'
        ctx.fill();
        return null;
    }
    
}
</script>