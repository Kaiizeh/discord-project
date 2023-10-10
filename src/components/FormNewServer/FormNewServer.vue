<script setup>
import { ref, inject } from 'vue';
import FirstStep from "./subComponents/FirstStep.vue";
import SecondStep from "./subComponents/SecondStep.vue";
import ThirdStep from "./subComponents/ThirdStep.vue";
import { PUBLIC_API } from '../../../utils/constants';
import { schema } from "../../schemas/server.schema";

const { updateServerList, manageCreationServer } = inject("server");
const step = ref(1);
let server = schema();

const nextStep = (pStep, options) => {
    switch(pStep) {
        case 1:
            step.value++;
            break;
        case 2:
            server.type = options.type;
            step.value++;
            break;
        case 3: 
            server.name = options?.name;
            server.image = options?.image;
            createServer(server);
            break;
    }
    
}

const backStep = () => {
    switch(step) {
        case 2:
            server.type = null;
            break;
        case 3: 
            server.name = null;
            server.image = null;
            break;
    }
    step.value--;
}

const createServer = (newServer) => {
    PUBLIC_API.post("addServer", newServer).then(res => {
        const { data } = res;
        if(data.success === true) {
           updateServerList(data.serverList);
           manageCreationServer();
        }
    });
}
</script>

<template>
    <FirstStep @nextStep="nextStep" v-if="step === 1"/>
    <SecondStep @nextStep="nextStep" @backStep="backStep" v-if="step === 2"/>
    <ThirdStep @nextStep="nextStep" @backStep="backStep" v-if="step === 3"/>
</template>


<style scoped>
</style>