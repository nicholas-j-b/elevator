<template>
    <div class="button-wrapper">
        <button @click="click()">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonText: String,
        click: Function
    }
}
</script>