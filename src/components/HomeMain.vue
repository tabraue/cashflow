<template>
  <LayoutMain>
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
        <template #graphic>
          <Graphic :amounts="amounts"/>
        </template>

        <template #action>
          <Action />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements"></Movements>
    </template>
  </LayoutMain>
</template>

<script>
import { ref } from "vue";
import { fakedata } from "../data/movement-data";
import LayoutMain from "./LayoutMain.vue";
import HeaderMain from "./HeaderMain.vue";
import Resume from "./Resume/IndexResume.vue";
import Action from "./ActionMain.vue";
import Movements from "./Movements/IndexMovements.vue";
import Graphic from './Resume/GraphicResume.vue';

/* const data = reactive({
  fakedata: [...fakedata],
}); */

export default {
  components: {
    LayoutMain,
    HeaderMain,
    Resume, 
    Action,
    Movements,
    Graphic,
  },
  setup() {
    const movements = ref(fakedata);
    const amount = null;
    const label = "Ahorro total";
    //const amounts = ref(amounts)
    const amounts = [100, 200, 500, 200, -400, -600, -300, 0, 300, 500]
    return {
      amount,
      label,
      movements,
      amounts
    };
  },
  /*   data() {
    return {
      amount: null,
      label: "Ahorro total",
      movements: fakedata, // movements es la variable local que contiene fakedata => :movements es un prop que usa movements variable local
    };
  }, */
};
</script>

<style scoped></style>
