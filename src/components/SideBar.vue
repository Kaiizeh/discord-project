<script setup>

import BadgeServer from "../UI_Components/BadgeServer.vue";

</script>

<template>
    <aside class="sidebar bg-neutral-800">
        <BadgeServer @helloWorld="console.log('Hello world !')"></BadgeServer>
    </aside>
</template>

<style>
.sidebar {
    width: 5rem;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .25rem;
}
</style>