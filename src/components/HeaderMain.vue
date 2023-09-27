<template>
  <header>
    <img @click="reload" src="../assets/logo.svg" alt="Logo Cash Flow" />
    <h1><span>Cash</span>Flow</h1>
    <span></span>
  </header>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
}

img,
span {
  width: 48px;
}

img{
  cursor: pointer;
}

h1 {
  font-size: 1.4rem;
  color: var(--darkblue);
}

h1 span {
  color: var(--green);
}
</style>
