<script setup>
import BadgeServer from "../UI_Components/BadgeServer.vue";
import { ref, inject } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { actionServer } from "../../utils/constants"

const { server, serverList, selectServer, manageCreationServer } = inject("server");
</script>

<template>
    <aside class="relative sidebar">
        <BadgeServer :isServer="false" :isSelect="(server === actionServer.PRIVATE_MESSAGE)" :isVariant="false"
            @click="selectServer(actionServer.PRIVATE_MESSAGE)">
            <FontAwesomeIcon :icon="faDiscord" size="xl" />
        </BadgeServer>
        <div class="w-1/2 h-[2px] bg-[#2C2F33] m-auto mb-5"></div>
        <BadgeServer v-for="pServer in serverList" :server="pServer" :isServer="true" :isVariant="false" :isSelect="server?._id === pServer?._id" />
        <BadgeServer :isServer="false" :isVariant="true" @click="manageCreationServer"
            :isSelect="(server === actionServer.ADD_SERVER)">
            <FontAwesomeIcon :icon="faPlus" size="xl" />
        </BadgeServer>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 5rem;
    height: 100vh;
    overflow: hidden scroll;
    padding: .1rem;
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    background: #23272A;
}

.sidebar::-webkit-scrollbar {
    display: none;
}
</style>