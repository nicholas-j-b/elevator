<script>
import { EventBus } from '../../../main';

export default {
    inject: ['provider'],
    props: {
        size: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
        };
    },
    created() {
        EventBus.$on('building-created', this.setBuildingView);
        EventBus.$on('animation-rerender', this.rerender);
    },
    methods: {
        setBuildingView(buildingView){
            this.buildingView = buildingView;
            this.buildingView.render(this.provider.context);
        },
        rerender() {
            this.provider.context.clearRect(0, 0, 100, 100);
            this.buildingView.render(this.provider.context);
        }
    },
    render() {
        if (!this.provider.context) return null;
        if (!this.buildingView) return null;
        this.buildingView.render(this.provider.context);
        return null;
    }
    
}
</script>