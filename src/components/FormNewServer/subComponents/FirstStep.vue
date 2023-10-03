<script setup>
import Modal from '../../../UI_Components/Modal.vue';
import ButtonImage from './ButtonImage.vue';
import myOwn from '/myOwn.svg?url';

defineEmits(["nextStep"]);
</script>

<template>
    <Modal title="Create a server">
        <template v-slot:modal-body>
            <ButtonImage :image="myOwn" title="Create My Own" @click="$emit('nextStep', 1)" />
        </template>
        <template v-slot:modal-footer>
            <span class="footer-text">
                Have an invite already ?
            </span>
            <button class="footer-button">
                <div class="my-0 mx-auto">
                    Join a Server
                </div>
            </button>
        </template>
    </Modal>
</template>

<style scoped>

.footer-text {
    line-height: 24px;
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 600;
}

.footer-button {
    align-self: stretch;
    width: auto;
    background: hsl(229 4.8% 44.9%);
    font-size: 14px;
    line-height: 16px;
    padding: 8px 16px;
    border-radius: 3px;
    box-sizing: border-box;
    color: #FFFFFF;
    font-weight: 600;
}
</style>