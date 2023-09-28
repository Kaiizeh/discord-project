<script setup>
const props = defineProps(["serverName", "image", "isServer"]);
</script>

<template>
    <div class="badge-container" v-if="props.isServer">
        <div v-if="props.image" class="badge badge-image">
            <img :src="props.image" />
        </div>
        <div v-else class="badge badge-name">
            <span @if="!props.image">{{ props.serverName }}</span>
        </div>
    </div>
    <div class="badge-container" v-else>
        <div class="badge badge-name">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.badge-container {
    width: 100%;
    height: 3.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0
}

.badge {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    color: #F1F1F1;
    cursor: pointer
}

.badge:hover {
    transition: .3s;
    border-radius: 30%;
}

.badge-image {
    background: transparent;
}

.badge-name {
    background: #525252;
}

.badge-name:hover {
    background: #6366f1;
}
</style>