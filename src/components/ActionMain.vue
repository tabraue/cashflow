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

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 0 24px;
}

.field {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
  color: var(--txtblue);
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--darkblue);
  border-radius: 8px;
  padding: 8px;
}

input[type="number"] {
  text-align: right;
}


.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--darkblue);
  border: 2px solid var(--darkblue);
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: var(--darkblue);
}
</style>