<template>
    <LayoutMainVue>
        <template #header>
            <HeaderMain/>
        </template>
        <template #resume>
            <IndexResume
                :label="'Ahorro total'"
                :amount="10000"
                :totalAmount="10000000"
            />
        </template>
        <template #movements>
            <MovementsMain/>
        </template>
    </LayoutMainVue>
</template>

<script>
import LayoutMainVue from "./LayoutMain.vue";
import HeaderMain from "./HeaderMain.vue";
import IndexResume from "./Resume/IndexResume.vue";
import MovementsMain from "./MovementsMain.vue";

export default {
  components: {
    LayoutMainVue,
    HeaderMain,
    IndexResume,
    MovementsMain
},
};
</script>

<style scoped></style>
