<template>
  <div>
    <svg view-box="0 0 300 200">
      <line
        stroke="#c4c4c4"
        stroke-width="2"
        x1="0"
        :y1="zero"
        x2="300"
        :y2="zero"
      />
      <polyline
        fill="none"
        stroke="#0689B0"
        stroke-width="2"
        :points="points"
      />
      <line
        stroke="#04b500"
        stroke-width="2"
        x1="200"
        y1="0"
        x2="200"
        y2="200"
      />
    </svg>
    <p>Últimos 30 días</p>
    <div>{{ zero }}</div>
  </div>
</template>

<script setup>
import { computed, defineProps, toRefs } from "vue";

const props = defineProps({
  amounts: {
    type: Array,
    default: () => [],
  },
});

const { amounts } = toRefs(props);


const amountToPixels = (amount) => {
  const min = Math.min(...amounts.value);
  const max = Math.max(...amounts.value);

  const absolute = amount + Math.abs(min);
  const minVsMax = Math.abs(max) + Math.abs(min);

  const result = 200 - ((absolute * 100) / minVsMax) * 2
  return result
};

const zero = computed(() => {
  return amountToPixels(0)
})

const points = computed(() => {
  const total = amounts.value.length;
  return amounts.value.reduce((points, amount, idx) => {
    const x = (300 / total) * (idx + 1);
    const y = amountToPixels(amount);
    return `${points} ${x},${y}`;
  }, "0, 100");
});
</script>

<style scoped>
svg {
  width: 100%;
}

p {
  text-align: center;
}
</style>
