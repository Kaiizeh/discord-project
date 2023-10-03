<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Modal from '../../../UI_Components/Modal.vue';
import { ref } from "vue";
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
const emit = defineEmits(["nextStep", "backStep"]);
const name = ref("");
const image = ref(null);
const isLoading = ref(false);

const submit = () => {
    isLoading.value = true;
    emit("nextStep", 3, { name: name.value, image: image.value });
}

</script>

<template>
    <Modal title="Customize your server">
        <template v-slot:modal-body>
            <div class="w-full flex justify-center p-2">
                <label for="downloader" class="image-uploader-button">
                    <div class="uploader_icon-add">
                        <FontAwesomeIcon :icon="faPlus" class="mx-auto" />
                    </div>
                    <div class="flex justify-center items-center w-full flex-col">
                        <FontAwesomeIcon :icon="faCamera" size="xl" />
                        <span class="font-bold">UPLOAD</span>
                    </div>
                    <input class="image-uploader-input" type="file" name="downloader" />
                </label>

            </div>
            <div>
                <label class="font-bold text-[13px]">SERVER NAME</label>
                <input type="text" v-model="name" class="w-full bg-neutral-300 p-2 rounded outline-transparent" />
                <span class="text-[12px] text-neutral-400">By creating a server, you agree to Discord's Community
                    Guidelines</span>
            </div>
        </template>
        <template v-slot:modal-footer>
            <div class="flex justify-between w-full">
                <button type="button" @click="$emit('backStep')">Back</button>
                <button class="bg-[#5865F2] text-neutral-100 py-2 px-4 rounded" type="button" @click="submit"
                    v-if="!isLoading">
                    Create
                </button>
                <div class="bg-[#5865F2] text-neutral-100 py-2 px-4 rounded flex items-center" v-if="isLoading">
                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creation...
                </div>
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

.image-uploader-input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    font-size: 0px;
}

.image-uploader-button {
    width: 90px;
    height: 90px;
    border: dashed #242424 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-size: 14px;
    position: relative;
}

.uploader_icon-add {
    position: absolute;
    top: 0;
    right: -5px;
    background: #5865F2;
    border: solid #FFFFFF 1px;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
}
</style>