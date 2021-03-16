<template>
<div>
  <h1>Work</h1>
  <p>A collection of my work, feel free to enter each one of them.</p>
  <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32">
    <project-preview v-for="(project, index) in projects" :element="project" :key="index" :index="index"  />
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
};
</script>

<style>

</style>
