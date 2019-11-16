<template>
    <div class="button-wrapper">
        <button @click="click()">{{ buttonText }}</button>
    </div>
</template>

<script>
//import MenuController from '../../../controller/menu_controller.js'

export default {
    name: 'Button',
    props: {
        buttonText: String,
        click: Function
    }
}
</script>