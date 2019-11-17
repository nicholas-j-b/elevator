<template>
<div class="page-wrapper">
    <Title
    :msg="title"
    ></Title>
    
    <Menu
    ></Menu>

    <animation-field><Body
        :size="size"
    ></Body></animation-field>

    <button @click="click()">debug</button>
</div>
</template>

<script>
import Title from './Title.vue'
import AnimationField from './AnimationField.vue'
import Body from './Body.vue'
import Menu from './Menu.vue'

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
        }
    },
    methods: {
        click() {
            console.log('click');
        }
    }
}
</script>

<style scoped>
.page-wrapper {
    height: 100%;
}
</style>