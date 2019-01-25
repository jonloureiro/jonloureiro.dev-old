<template lang="html">
  <transition
    :css="false"
    appear
    @appear="appearHook"
  >
    <nav :class="$options.name">
      <div :class="`${$options.name}__wrapper`">
        <nuxt-link :class="`${$options.name}__link`" to="/">
          Eu
        </nuxt-link>
        <nuxt-link :class="`${$options.name}__link`" to="/notes">
          Notas
        </nuxt-link>
        <nuxt-link :class="`${$options.name}__link`" to="/projects">
          Projetos
        </nuxt-link>
      </div>
      <footer :class="`${$options.name}__footer`">
        Make with
        <strong :class="`${$options.name}__footer--strong`">
          Nuxt
        </strong>
      </footer>
    </nav>
  </transition>
</template>

<script>
import TweenMax from 'gsap'

export default {
  name: 'SideNav',
  methods: {
    appearHook: function(el) {
      TweenMax.from(el, 0.5, {
        x: -32,
        opacity: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/lib.scss';

.SideNav {
  background-color: #fff;

  &__wrapper {
    flex-grow: 1;
    height: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  &__link {
    font-size: 1.15rem;
    color: $color-primary;
    text-decoration: none;
    margin: 0.125rem 0rem;
  }

  .nuxt-link-exact-active {
    color: $color-active;
    font-weight: 600;
  }

  &__footer {
    flex-shrink: 1;
    align-self: center;
    font-size: 0.85rem;
    color: $color-primary;

    &--strong {
      color: $color-active;
    }
  }
}
</style>
