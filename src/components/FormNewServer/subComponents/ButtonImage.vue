<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
defineProps({
    image: String,
    title: String
});
</script>

<template>
    <button class="button" type="button">
        <img :src="image" class="button-image" />
        <span class="button-text">{{ title }}</span>
        <FontAwesomeIcon :icon="faChevronRight" class="button-icon"/>
    </button>
</template>

<style scoped>
.button {
    width: 100%;
    display: flex;
    align-items: center;
    border: solid 1px #c5c7ca;
    border-radius: 5px;
    margin-bottom: 8px;
}

.button:hover {
    transition: .3s;
    background: #e2e4e7;
}

.button-image {
    margin: 8px 8px 8px 16px;
}

.button-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
}

.button-icon {
    margin-left: auto;
    margin-right: 16px;
}
</style>