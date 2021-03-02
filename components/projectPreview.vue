<template>
<nuxt-link :to="`${element.path}`" class="w-full mx-0 my-12"  exact>
  <div class="relative flex items-center justify-center projPreview__container">
    <img class="m-0 opacity-70 bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
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
  data({ index }) {
    console.log(index);
    return {
      test: true,
    };
    /* const finalIndex = index + 1;
    const isLarge = finalIndex % 2 === 0 ? 'large' : null;
    const gridPosition = {
      gridArea: index === 0 ? 'a' : index.toString(),
    };
    return {
      isLarge,
      gridPosition,
    }; */
  },
};
</script>

<style scoped>
p {
  font-family: 'Lato';
  @apply text-white;
}
</style>
