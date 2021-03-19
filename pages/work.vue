<template>
<div class="work">
  <h1>Work</h1>
  <p>A collection of my work, feel free to enter each one of them.</p>
  <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32">
    <project-preview v-for="(project, index) in projects" :element="project" :key="project.title" :index="index" />
  </div>
</div>
</template>

<script>
import projectPreview from '../components/projectPreview.vue';

export default {
  components: {
    projectPreview,
  },
  async asyncData({ $content }) {
    const projects = await $content('projects', { deep: true })
      .only(['title', 'image', 'url'])
      .sortBy('fecha', 'desc')
      .fetch();
    return {
      projects,
    };
  },
  mounted() {
    document.body.scrollTop = 2;
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

};
</script>

<style>
.work {
  min-height: 65vh;
}
</style>
