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
    </Card>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

import Card from '~/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  transition: {
    css: false,
    beforeEnter: function(el) {
      // ...
    },
    enter: function(el, onComplete) {
      TweenMax.from(el, 1, {
        x: 500,
        ease: Expo.easeOut,
        onComplete
      })
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
    leave: function(el, onComplete) {
      TweenMax.to(el, 0.5, {
        x: -500,
        ease: Expo.easeIn,
        onComplete
      })
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
}
</style>
