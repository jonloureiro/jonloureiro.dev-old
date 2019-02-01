<template lang="html">
  <div :class="$options.name">
    <SideNav :class="`${$options.name}__side-nav`" />
    <nuxt :class="`${$options.name}__main`" />
    <SocialNav :class="`${$options.name}__social-nav`" />
  </div>
</template>

<script>
import SideNav from '~/components/SideNav.vue'
import SocialNav from '~/components/SocialNav.vue'

export default {
  name: 'Layout',
  components: {
    SideNav,
    SocialNav
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/lib.scss';

.Layout {
  overflow: scroll;
  display: grid;
  grid-template-rows: 2.75rem 1fr 2.75rem;
  grid-template-columns: 1fr;
  height: 100vh;

  &__side-nav {
    order: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    box-shadow: $my-shadow;
  }

  &__main {
    order: 1;
    z-index: 0;
  }

  &__social-nav {
    order: 2;
    z-index: 2;
    display: flex;
    box-shadow: $my-shadow;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
  }

  @include media-m {
    & {
      grid-template-columns: 16rem 1fr 4rem;
      grid-template-rows: 1fr;
    }

    &__side-nav {
      flex-direction: column;
      padding: 0.125rem 0.5rem;
    }

    &__main {
    }

    &__social-nav {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @include media-l {
    & {
      grid-template-columns:
        1fr 16rem minmax(calc(1024px - 32rem), calc(1280px - 32rem))
        12rem 1fr 4rem;
    }

    &__side-nav {
      grid-column: 1 / 3;
    }

    &__main {
    }

    &__social-nav {
      grid-column: 6 / -1;
    }
  }
}
</style>
