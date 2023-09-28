<template>
    <div class="movement">
        <div class="content">
            <h4>{{ movement.title }}</h4>
            <p>{{ movement.description }}</p>
        </div>
        <div class="action">
            <img src="../../assets/icons/trash.svg" alt="Icono de Eliminar. Basura" @click="remove(movement.id)" />
            <p :class="{ 'red': isNegative, 'green': !isNegative }">{{ amountCurrency }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { currencyFormater } from "../../functions/functions";
const emit = defineEmits(["remove"]) // pasar prop al padre con defineEmits, le enviamos remove

const amountCurrency = computed(() =>
    currencyFormater.format(props.movement.amount)
);

const remove = (id) => {
    console.log(id)
    emit("remove", id); // prop al padre
};

const isNegative = computed(() => props.movement.amount < 0)


const props = defineProps({
    movement: {
        type: Object,
    },
});

</script>

<style scoped>
.movement {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background-color: var(--lightblue);
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
    color: var(--red);
    font-weight: bold;
}

.green {
    color: var(--green);
    font-weight: bolder;
}

img {
    cursor: pointer;
}
</style>
