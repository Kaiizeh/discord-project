<script setup>
import Modal from '../../../UI_Components/Modal.vue';
import ButtonImage from './ButtonImage.vue';
import community from '/community.svg?url';
import friends from '/friends.svg?url';
import { serverType } from '../../../../utils/constants';
defineEmits(["nextStep", "backStep"]);
</script>

<template>
    <Modal title="Create a server">
        <template v-slot:modal-body>
            <ButtonImage :image="friends" title="For me and my friends" @click="$emit('nextStep', 2, {type: serverType.FRIENDS})" />
            <ButtonImage :image="community" title="For a club or community" @click="$emit('nextStep', 2, {type: serverType.COMMUNITY})" />
            <div class="w-full text-center">
                Not sure ? You can <a>skip this question</a> for now.
            </div>
        </template>
        <template v-slot:modal-footer>
            <div class="w-full text-start font-bold cursor-pointer" @click="$emit('backStep')">
                Back
            </div>
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