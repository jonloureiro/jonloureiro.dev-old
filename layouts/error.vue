<template>
  <div>
    <section>
      <h2>Ops... &#x1F605;</h2>
      <p v-if="error.statusCode === 404">
        Página não encontrada
      </p>
      <p v-else>
        Um erro aconteceu
      </p>
      <hr>
    </section>
    <nav>
      <nuxt-link to="/">
        Página Inicial
      </nuxt-link>
      &middot;
      <a href="#" @click="back">
        Voltar
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['error'],
  layout: 'default',
  methods: {
    back: function(e) {
      e.preventDefault()
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/lib.scss';

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $color-primary;
}

h2,
p {
  margin: 0.25rem 0 0;
}

hr {
  color: $color-active;
}

a {
  color: $color-active;
}
</style>
