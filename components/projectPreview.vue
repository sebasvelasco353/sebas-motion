<template>
<nuxt-link :to="`${element.url}`" class="mx-0 col-span-1" :class="positionClass" exact>
  <div class="projPreview__container">
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
      const position = ((this.index + 1) % 3 === 0) || ((this.index + 1) % 2 === 0) ? 'row-span-2' : 'row-span-1';
      return position;
    },
  },
  data() {
    console.log(this.element);
    return {};
  },
};
</script>

<style scoped>
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
