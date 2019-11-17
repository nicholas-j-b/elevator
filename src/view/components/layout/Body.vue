<script>
export default {
    inject: ['provider'],
    props: {
        size: {
            type: Number,
            default: 0,
        },
        buildingInstance: Object
    },
    data() {
        return {
        };
    },
    render() {
        console.log('body render');
        if (!this.provider.context) return null;
        if (!this.instance) return null;
        this.instance.buildingView.render(this.provider.context);
        return null;
    }
    
}
</script>