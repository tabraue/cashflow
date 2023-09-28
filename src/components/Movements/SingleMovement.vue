<template>
    <div class="movement">
        <div class="content">
            <h4>{{ movement.title }}</h4>
            <p>{{ movement.description }}</p>
        </div>
        <div class="action">
            <img 
                src="../../assets/icons/trash.svg" 
                alt="Icono de Eliminar. Basura"
                @click="remove(movement.id)"
                >
            <p>{{ movement.amount }}</p>
        </div>
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';

const remove = (id) => {
    alert(id)
}

defineProps({
    movement: {
        type: Object
    }
})
</script>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
    color: red;
}
.green {
    color: green;
}
</style>