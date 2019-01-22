<template lang="html">
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
</template>

<script>
export default {
  name: 'SocialNav'
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
