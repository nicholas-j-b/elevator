<template>
<div>
    <Title
    :msg="title"
    ></Title>
    <animation-field><Body
    :size="size"
    ></Body></animation-field>
</div>
</template>

<script>
import Title from './Title.vue'
import AnimationField from './AnimationField.vue'
import Body from './Body.vue'

export default {
    name: 'Page',
    components: {
        Title,
        AnimationField,
        Body
    },
    data: function() {
        return {
            title: "Elevator App",
            size: 3
        }
    },
    mounted() {
        setInterval(() => {this.size = this.size + 1;}, 50);
    }
}
</script>