<template>
<nuxt-link :to="`${element.url}`" class="mx-0 col-span-1" :class="positionClass" exact>
  <div class="projPreview__container" ref="projectPreview">
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
      const position = ((this.index + 1) % 3 === 0) || ((this.index + 1) % 2 === 0) ? 'row-span-2 _right' : 'row-span-1 _left';
      return position;
    },
  },
  data() {
    return {};
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var doc = document.documentElement;
      let positionY = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      const elementTop = this.$refs.projectPreview.getBoundingClientRect().top
      if(elementTop <= positionY) {
        this.scrollAnimation_left();
        this.scrollAnimation_right();
      }
    },
    scrollAnimation_left() {
     return gsap.to("._left", {
        x: 0,
        duration: 1,
        opacity: 1,
        display: 'block'
      });
    },
    scrollAnimation_right() {
      return gsap.to("._right", {
        x: 0,
        duration: 1,
        opacity: 1,
        display: 'block'
      });
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
._left {
  display: none;
  opacity: 0;
  transform: translateX(-10000px);
}
._right {
  display: none;
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
