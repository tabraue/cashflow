<template>
  <main>
    <p>{{ labelView }}</p>
    <h1>{{ amountCurrency }}</h1>
    <div class="graphic">
      <slot name="graphic"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </main>
</template>

<script>
const currencyFormater = new Intl.NumberFormat("es-SP", {
  style: "currency",
  currency: "EUR"
})
export default {
  props: {
    label: {
      type: String,
      default: "Ahorro total",
    },
    date: {
      type: Date,
    },
    totalAmount: {
      type: Number,
    },
    amount: {
      type: Number,
      default: null,
    },
  },
  computed: {
    amountVisual() {
      return this.amount !== null ? this.amount : this.totalAmount;
    },
    labelView() {
      return this.label !== null ? this.label : this.date
    },
    amountCurrency() {
      return currencyFormater.format(this.amountVisual)
    }
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

h1,
p {
  margin: 0;
  text-align: center;
}
h1 {
  margin-top: 14px;
  color: var(--green);
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>
