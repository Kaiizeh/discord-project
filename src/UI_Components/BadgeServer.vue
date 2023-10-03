<script setup>
defineProps({
    "server": Object,
    "isServer": Boolean,
    "isSelect": Boolean,
    "isVariant": Boolean
});
</script>

<template>
    <div class="badge-container" v-if="isServer">
        <div class="badge" :class="{ 'badge-standard': !isVariant, 'active': isSelect }" v-if="server.image">
            <img :src="server.image" />
        </div>
        <div class="badge" :class="{ 'badge-standard': !isVariant, 'active': isSelect }" v-else>
            <span class="font-semibold text-[20px]">{{ server.name.charAt(0) }}</span>
        </div>
    </div>
    <div class="badge-container" v-else>
        <div class="badge" 
        :class="{ 'badge-action': isVariant, 'badge-standard': !isVariant, 'active-action': (isSelect && isVariant), 'active-standard':  (isSelect && !isVariant)}"
        >
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.badge-container {
    width: 100%;
    height: 3.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem 0;
}

.badge {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #FFFFFF;
    cursor: pointer
}

.badge:hover {
    transition: .3s;
    border-radius: 30%;
}

.badge-image {
    background: transparent;
}

.badge-standard,
.badge-action {
    background: #2C2F33;
}

.badge-action {
    color: #22c55e;
}

.badge-standard:hover {
    background: #5865F2;
}

.badge-action:hover {
    background: #22c55e;
    color: #FFFFFF;
}

.active-standard {
    background: #5865F2;
    border-radius: 30%;
    color: #FFFFFF;
}

.active-action {
    background: #22c55e;
    border-radius: 30%;
    color: #FFFFFF;
}

</style>