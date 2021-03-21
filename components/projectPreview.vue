<template>
<nuxt-link :to="localePath(`${element.url}`)" class="mx-0 col-span-1" :class="positionClass" exact>
  <div class="projPreview__container" ref="projectPreview">
    <img class="bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
    <p class="absolute z-30 w-full text-3xl text-center break-words">{{ element.title }}</p>
  </div>
</nuxt-link>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    positionClass() {
      const position = ((this.index + 1) % 3 === 0) || ((this.index + 1) % 2 === 0) ? 'row-span-2 _right' : 'row-span-1 _left';
      return position;
    },
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
._left {
  opacity: 0;
  transform: translateX(-10000px);
}
._right {
  opacity: 0;
  transform: translateX(10000px);
}
.bg {
  @apply object-cover;
  @apply w-full;
  @apply h-full;
  @apply m-0;
  @apply opacity-70;
}
.projPreview__container {
  font-family: 'Lato';
  @apply relative;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
  @apply rounded-2xl;
  @apply text-white;
};
</style>
