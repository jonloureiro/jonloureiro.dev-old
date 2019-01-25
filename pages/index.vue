<template lang="html">
  <div :class="$options.name">
    <Card :class="`${$options.name}__card`">
      <img src="~/assets/me-96x96.jpg" :class="`${$options.name}__img`">
      <h3 :class="`${$options.name}__title`">
        Jonathan Loureiro
      </h3>
      <p :class="`${$options.name}__text`">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <nuxt-link :class="`${$options.name}__link`" to="/curriculum">
        Curriculum
      </nuxt-link>
    </Card>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import animation from '~/assets/js/animation.js'
import Card from '~/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  transition: {
    css: false,
    enter: function(el, onComplete) {
      const from = this.$store.state.route.from
      let transition

      switch (from.name) {
        case 'curriculum':
          transition = animation.xMinus()
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
        case 'curriculum':
          transition = animation.xMinus()
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

.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-primary;

  &__card {
    width: 16rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    margin-bottom: 0.25rem;
  }

  &__title {
    margin: 0.25rem;
    text-align: center;
    color: $color-active;
  }

  &__text {
    margin: 0;
    text-align: justify;
  }

  &__link {
    margin-top: 0.25rem;
    color: $color-active;
  }
}
</style>
