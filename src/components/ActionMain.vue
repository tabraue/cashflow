<template>
    <button @click="showModal = !showModal">Agregar movimiento</button>
    <Teleport to="#app">
        <Modal v-show="showModal" @close="close">
            <FormMoves @submit="submit" :fakedata="fakedata"/>
        </Modal>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./ModalForm.vue";
import FormMoves from "./FormMovements.vue"
import { fakedata } from "../data/movement-data"

const showModal = ref(false)

const close = () => showModal.value = false



const submit = (move) => {
    fakedata.push(move)
    showModal.value = !showModal.value
}

</script>


<style scoped>
button {
    color: white;
    font-size: 1.25rem;
    background-color: var(--darkblue);
    border: none;
    width: 100%;
    padding: 24px 60px;
    border-radius: 60px;
    box-sizing: border-box;
    cursor: pointer;
}


</style>