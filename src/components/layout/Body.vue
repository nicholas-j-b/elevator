<script>
import Building from '../../model/animation/building.js'

export default {
    inject: ['provider'],
    props: {
        size: {
            type: Number,
            default: 0,

        },
        building: Building
    },
    data() {
        return {
        }
    },
    render() {
        if(!this.provider.context) return null;
        const ctx = this.provider.context;
        ctx.rect(0, 0, this.building.w, this.building.h);
        ctx.fillStyle = '#F00'
        ctx.fill();
        return null;
    }
    
}
</script>