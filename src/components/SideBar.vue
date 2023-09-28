<script setup>
import BadgeServer from "../UI_Components/BadgeServer.vue";
import { ref } from "vue";
import discord from "../assets/discord.svg";

const badges = ref([
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
    {
        serverName: "KS",
        image: null
    },
]);

</script>

<template>
    <aside class="sidebar bg-neutral-800">
        <BadgeServer :isServer="false" :image="discord"/>
        <BadgeServer v-for="badge in badges" :serverName="badge.serverName" :image="badge.image" :isServer="true" />
        <BadgeServer :isServer="false" background>
            <div>+</div>
        </BadgeServer>
    </aside>
</template>

<style>
.sidebar {
    width: 5rem;
    height: 100vh;
    overflow: hidden scroll;
    padding: 1rem .25rem 0 .25rem;
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
}

.sidebar::-webkit-scrollbar {
    display: none;
}
</style>