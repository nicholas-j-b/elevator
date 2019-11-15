<template>
    <Title
    :msg="title"
    ></title>
</template>

<script>
import Title from './Title.vue'

export default {
    name: 'Page',
    components: {
        Title
    },
    data: function() {
        return {
            title: "Elevator App"
        }
    }
}
</script>