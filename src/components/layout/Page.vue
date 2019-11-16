<template>
<div class="page-wrapper">
    <Title
    :msg="title"
    ></Title>
    
    <Menu
        :building="building"
    ></Menu>

    <animation-field><Body
    :size="size"
    :building="building"
    ></Body></animation-field>
</div>
</template>

<script>
import Title from './Title.vue'
import AnimationField from './AnimationField.vue'
import Body from './Body.vue'
import Menu from './Menu.vue'
import Building from '../../model/animation/building.js'

export default {
    name: 'Page',
    components: {
        Title,
        AnimationField,
        Body,
        Menu
    },
    data: function() {
        return {
            title: "Elevator App",
            size: 3,

            building: new Building(99)
        }
    }
}
</script>

<style scoped>
.page-wrapper {
    height: 100%;
}
</style>