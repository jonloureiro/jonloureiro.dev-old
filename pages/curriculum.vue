<template lang="html">
  <div>
    <section>
      <h2>Ops... &#x1F605;</h2>
      <p>{{ pageName }} em construção!</p>
      <hr>
    </section>
    <nav>
      <nuxt-link :class="`${$options.name}__link`" to="/">
        Voltar
      </nuxt-link>
      &middot;
      <a href="https://github.com/jonloureiro/jonloureiro.github.io">
        Code
      </a>
    </nav>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import animation from '~/assets/js/animation.js'

export default {
  name: 'Curriculum',
  data: function() {
    return {
      pageName: 'Curriculum'
    }
  },
  transition: {
    css: false,
    enter: function(el, onComplete) {
      const from = this.$store.state.route.from
      let transition

      switch (from.name) {
        case 'index':
          transition = animation.xPlus()
          break
        case null:
          transition = animation.zPlus(0.5)
          break
        default:
          transition = animation.zMinus()
      }

      const { x, scale, opacity, delay } = transition
      TweenMax.from(el, animation.duration.enter, {
        x,
        scale,
        opacity,
        delay,
        ease: Expo.easeInOut,
        onComplete
      })
    },
    leave: function(el, onComplete) {
      const to = this.$store.state.route.to
      let transition

      switch (to.name) {
        case 'index':
          transition = animation.xPlus()
          break
        default:
          transition = animation.zMinus()
      }

      const { x, scale, opacity } = transition
      TweenMax.to(el, animation.duration.leave, {
        x,
        scale,
        opacity,
        ease: Expo.easeIn,
        onComplete
      })
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
