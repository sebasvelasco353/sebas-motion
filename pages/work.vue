<template>
<div class="work">
  <h1>Work</h1>
  <p>A collection of my work, feel free to enter each one of them.</p>
  <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32" ref="projectPreview">
    <project-preview v-for="(project, index) in projects" :element="project" :key="project.title" :index="index" />
  </div>
</div>
</template>

<script>
import projectPreview from '../components/projectPreview.vue';
import gsap from "gsap";

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
   this.scrollAnimation_left();
   this.scrollAnimation_right();
  },
  methods: {
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
  overflow-x: hidden;
}
</style>
