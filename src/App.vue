<script setup>
import SideBar from "./components/SideBar.vue";
import Content from "./components/Content.vue";
import { provide, ref, onMounted } from "vue";
import axios from "axios";
import FormNewServer from "./components/FormNewServer/FormNewServer.vue";
import { PUBLIC_API } from "../utils/constants";

const server = ref("private_messages");
const serverList = ref([]);
const isCreatedServer = ref(false);

const manageCreationServer = () => {
  isCreatedServer.value = isCreatedServer.value === false;
};

function selectServer(pServer) {
  console.log(pServer)
  server.value = pServer
};

const updateServerList = (newList) => {
  serverList.value = newList;
}

provide('server', {
  server,
  serverList,
  selectServer,
  manageCreationServer,
  updateServerList
});

onMounted(() => {
  PUBLIC_API.get("getServers")
    .then(res => {
      console.log(res);
      const { data } = res;
      if(data.success) {
        console.log(data.serverList);
        serverList.value = data.serverList;
      }
    });

});
</script>

<template>
  <div class="flex">
    <SideBar />
    <Content />
    <FormNewServer v-if="isCreatedServer" />
  </div>
</template>

<style scoped></style>