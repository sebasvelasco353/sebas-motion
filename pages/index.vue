<template>
  <div>
    <div class="reel">
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
    <img src="@/assets/images/separator.svg" alt="Separator images">
    <div class="projects">
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

<style>
.reel {
  width: 75vw;
  height: 80vh;
  border-radius: 30px;
  overflow: hidden;
}
img {
 margin: 0 auto;
}
/*h3 {*/
  /*margin: 5rem auto;*/
  /*font-size: 3.6rem;*/
  /*width: 50%;*/
/*}*/
.projects {
  margin: 15rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 5rem;
  row-gap: 5rem;
  grid-template-areas:
    "a 1"
    "2 1"
    "2 3";
 }
</style>
