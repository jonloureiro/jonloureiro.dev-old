<template lang="html">
  <section :class="$options.name">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/lib.scss';

.Card {
  box-shadow: $my-shadow;
  border-radius: 0.5rem;
  background-color: #fff;
  margin: 1.5rem;
}
</style>
