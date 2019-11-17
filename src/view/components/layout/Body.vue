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
    },
    methods: {
        setBuildingView(buildingView){
            this.buildingView = buildingView;
            this.buildingView.render(this.provider.context);
            console.log('set building view');
        }
    },
    render() {
        console.log('body render');
        if (!this.provider.context) return null;
        if (!this.buildingView) return null;
        this.buildingView.render(this.provider.context);
        return null;
    }
    
}
</script>