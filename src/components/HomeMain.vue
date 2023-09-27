<template>
  <LayoutMainVue>
    <template #header>
      <HeaderMain />
    </template>
    <template #resume>
      <Resume
        :label="label"
        :date="new Date()"
        :totalAmount="10000000"
        :amount="amount"
      >
        <template #graphic> graphic </template>
        <template #action> action </template>
      </Resume>
    </template>
    <template #movements>
      <Movements
      :movements="movements"
      >
      </Movements>
    </template>
  </LayoutMainVue>
</template>

<script>
import LayoutMainVue from "./LayoutMain.vue";
import HeaderMain from "./HeaderMain.vue";
import Resume from "./Resume/IndexResume.vue";
import Movements from "./Movements/IndexMovements.vue";
import {fakedata} from '../data/movement-data'

export default {
  components: {
    LayoutMainVue,
    HeaderMain,
    Resume,
    Movements,
  },
  data() {
    return {
      amount: null,
      label: "Ahorro total",
      movements: fakedata
    };
  },
};
</script>

<style scoped></style>
