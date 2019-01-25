<template lang="html">
  <transition
    :css="false"
    appear
    @appear="appearHook"
  >
    <nav :class="$options.name">
      <a href="#">
        social1
      </a>
      <a href="#">
        social2
      </a>
      <a href="#">
        social3
      </a>
    </nav>
  </transition>
</template>

<script>
import TweenMax from 'gsap'

export default {
  name: 'SocialNav',
  methods: {
    appearHook: function(el) {
      TweenMax.from(el, 0.5, {
        x: 64,
        opacity: 0,
        delay: 0.8
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/lib.scss';

.SocialNav {
  background-color: #fff;
}

a {
  margin: 1.25rem 0;
  text-decoration: none;
  font-weight: 600;
  color: $color-active;
}
</style>
