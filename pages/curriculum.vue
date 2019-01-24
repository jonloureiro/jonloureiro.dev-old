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
import TweenMax from 'gsap'

export default {
  name: 'Curriculum',
  data: function() {
    return {
      pageName: 'Curriculum'
    }
  },
  transition: {
    css: false,
    beforeEnter: function(el) {
      TweenMax.set(el, {
        x: 0
      }) // ...
    },
    // o callback de finalização é opcional quando
    // utilizado em combinação com CSS
    enter: function(el, done) {
      // ...
      done()
    },
    afterEnter: function(el) {
      // ...
    },
    enterCancelled: function(el) {
      // ...
    },
    beforeLeave: function(el) {
      // ...
    },
    // o callback de finalização é opcional quando
    // utilizado em combinação com CSS
    leave: function(el, done) {
      // ...
      done()
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled apenas disponível com v-show
    leaveCancelled: function(el) {
      // ...
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
