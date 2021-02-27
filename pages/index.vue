<template>
  <div>
    <div class="w-full reel">
      <!-- TODO: poner auto-play cuando termine pq me estoy enloqueciendo con la
      musica cada segundo -->
      <video height="100%" width="100%" controls>
        <source src="@/assets/video/Reel_2021.mp4" type="video/mp4">
        Tu navegador no tiene soporte para videos.
      </video>
    </div>
    <h3>
      Sebastián López is an awesome freelance motion designer from Colombia.
    </h3>
    <img src="@/assets/images/separator.svg" alt="Separator images" class="mx-auto my-0">
    <div class="flex flex-col my-6 projects">
      <project-preview v-for="(project, index) in projects" :key="project.slug" :element="project" :index="index" />
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
    const projects = await $content('projects', { deep: true }).only(['title', 'image']).limit(4).sortBy('fecha', 'desc')
      .fetch();
    return {
      projects,
    };
  },
};
</script>

<style scoped>
</style>
