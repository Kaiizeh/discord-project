<script setup>
import { inject } from 'vue';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
    title: String,
});

const {manageCreationServer} = inject("server");

</script>

<template>
    <div class="mask">
        <div class="modal relative">
            <div class="modal-header">
                <span class="title">
                    {{ title }}
                </span>
                <button type="button" class="absolute right-[10px] top-[10px]" @click="manageCreationServer">
                    <FontAwesomeIcon :icon="faClose" size="lg" class="opacity-70 hover:opacity-100 transition duration-300"/>
                </button>
            </div>
            <div class="modal-body">
                <slot name="modal-body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="modal-footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mask {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(2px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        width: 440px;
        max-height: 558px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        padding: 24px 16px 0;
    }

    .modal-header > span {
        font-size: 24px;
        font-weight: bolder;
        padding: 5px;
        width: 100%;
        text-align: center;    
    }

    .modal-body {
        padding: 0 8px 8px 16px;
        margin-top: 24px;
        height: 330px;
    }

    .modal-footer {
        padding: 16px;
        border-radius: 0px 0px 5px 5px;
        background: #e2e4e7;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>