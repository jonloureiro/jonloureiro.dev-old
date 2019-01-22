<template lang="html">
  <div>
    <section>
      <h2>Ops... &#x1F605;</h2>
      <p>{{ pageName }} em construção!</p>
      <hr>
    </section>
    <nav>
      <a href="https://github.com/jonloureiro">
        GitHub
      </a>
      &middot;
      <a href="https://github.com/jonloureiro/jonloureiro.github.io">
        Code
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data: function() {
    return {
      pageName: 'Projetos'
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
