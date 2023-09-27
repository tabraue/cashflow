<!-- <script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})


</script> -->

<template>
  <Suspense>
    <template #default>
      <HomeMain />
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    SplashScreen,
    HomeMain: defineAsyncComponent(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(import("./components/HomeMain.vue"));
        }, 2500);
      });
    }),
  },
};
</script>

<style scoped></style>
