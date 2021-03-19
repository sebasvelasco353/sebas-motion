<template>
<nuxt-link :to="`${element.url}`" class="mx-0 projectPreview col-span-1" :class="positionClass" exact>
  <div class="projPreview__container">
    <img class="bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
    <p class="absolute z-30 w-full text-3xl text-center break-words">{{ element.title }}</p>
  </div>
</nuxt-link>
</template>

<script>
import gsap from "gsap";

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
    return {};
  },
  mounted() {
    this.$nextTick(function () {
      gsap.to(".projectPreview", { duration: 1, delay: 0.5, x: 0, opacity: 1 });
    })
  }
};
</script>

<style scoped>
.projectPreview {
  opacity: 0;
  transform: translateX(-10000px);
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
.test-enter-active, .test-leave-active{
  transition: 1.5s;
}
.test-enter, .test-leave-to {
  transform: translateY(1000vh);
  opacity: 0;
}
</style>
