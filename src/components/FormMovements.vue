<template>
  <form @submit.prevent="submit()">
    <div class="field">
      <label for="title">Título</label>
      <input type="text" v-model="title" />
    </div>
    <div class="field">
      <label for="amount">Cantidad</label>
      <input type="number" v-model="amount" />
    </div>
    <div class="field">
      <label for="description">Descripción</label>
      <textarea rows="4" v-model="description"></textarea>
    </div>
    <div class="field">
      <label for="movement" class="radio-label">
        <input type="radio" v-model="movementType" value="Income" />
        <span>Ingreso</span>
      </label>
      <label for="movement" class="radio-label">
        <input type="radio" v-model="movementType" value="Expense" />
        <span>Gasto</span>
      </label>
    </div>
    <div class="action">
      <button>Añadir</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { fakedata } from "../data/movement-data";

const emit = defineEmits(["submit"]);

const submit = () => {
  let lastId = getLastId();
  const newMove = {
    id: lastId + 1,
    title: title.value,
    amount: amount.value,
    description: description.value,
    movementType: movementType.value,
  };

  //fakedata.push(newMove);

  emit("submit", newMove);
  inputCleaner();
};

const getLastId = () => {
  const lastEl = fakedata[fakedata.length - 1];
  return lastEl ? lastEl.id : 0;
};

const inputCleaner = () => {
  title.value = "";
  amount.value = 0;
  description.value = "";
  movementType.value = "Income";
};

const title = ref("");
const amount = ref(0);
const description = ref("");
const movementType = ref("Income");
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
  justify-content: space-between;
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

input[type="radio"] {
  cursor: pointer;
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
