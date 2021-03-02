<template>
<nuxt-link :to="`${element.path}`" class="col-span-1" :class="positionClass" exact>
  <div class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-2xl projPreview__container">
    <img class="w-full h-full m-0 opacity-70 bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
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
      return ((this.index + 1) % 2 === 0) ? 'row-span-2' : 'row-span-1';
    },
  },
};
</script>

<style scoped>
p {
  font-family: 'Lato';
  @apply text-white;
}
</style>
