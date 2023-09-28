<template>
  <div class="movements">
    <h2 class="title">Historial</h2>
    <div class="content">
      <SingleMovement v-for="movement in movements" 
        :key="movement.id" 
        :movement="movement"
        @remove="remove"
        />
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
import SingleMovement from "./SingleMovement.vue";

const props = defineProps({
  movements: {
    type: Array,
    default: () => [], 
    // se realiza arrow func para generar reactividad, 
    // y como default valor [] en caso de no existir valor desde el parent.
  },
});

const { movements } = toRefs(props);

const remove = (id) => {
  console.log("remove", id)
  
}

</script>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}
.title {
  margin: 8px 16px 24px 16px;
  color: var(--darkblue);
}
.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>
