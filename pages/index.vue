<template>
  <div>
    <div class="w-full reel">
      <!-- TODO: poner auto-play cuando termine pq me estoy enloqueciendo con la
      musica cada segundo -->
      <video height="100%" width="100%" class="rounded-2xl" controls >
        <source src="@/assets/video/Reel_2021.mp4" type="video/mp4">
        Tu navegador no tiene soporte para videos.
      </video>
    </div>
    <h3 class="mt-12 md:mt-24">
      Sebastián López is an awesome freelance motion designer from Colombia.
    </h3>
    <img src="@/assets/images/separator.svg" alt="Separator images" class="mx-auto my-0">
    <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-12">
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
    const projects = await $content('projects', { deep: true }).only(['title', 'image', 'url']).sortBy('fecha', 'desc')
      .fetch();
    return {
      projects,
    };
  },
};
</script>

<style scoped>
</style>
