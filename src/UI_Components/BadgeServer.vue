<script setup>
defineProps(["serverName, image"]);
defineEmits(["helloWorld"])

</script>

<template>
    <div class="badge" @click="$emit('helloWorld')">
        KS
    </div>
</template>

<style>
.badge {
    width: 2rem;
    height: 2rem;
    background: blue;
}

</style>