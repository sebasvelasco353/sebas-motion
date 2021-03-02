<template>
  <div>
    <div class="w-full reel">
      <!-- TODO: poner auto-play cuando termine pq me estoy enloqueciendo con la
      musica cada segundo -->
      <video height="100%" width="100%" class="rounded-2xl" controls>
        <source src="@/assets/video/Reel_2021.mp4" type="video/mp4">
        Tu navegador no tiene soporte para videos.
      </video>
    </div>
    <h3>
      Sebastián López is an awesome freelance motion designer from Colombia.
    </h3>
    <img src="@/assets/images/separator.svg" alt="Separator images" class="mx-auto my-0">
    <div class="flex flex-col my-6 projects md:grid md:grid-cols-2 md:grid-rows-4 md:gap-6">
      <project-preview :element="projects[0]" class="col-span-1 row-span-1" :index="0"  />
      <project-preview :element="projects[1]" class="col-span-1 row-span-2" :index="2"  />
      <project-preview :element="projects[2]" class="col-span-1 row-span-1" :index="3"  />
      <project-preview :element="projects[3]" class="col-span-1 row-span-2" :index="4"  />
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
