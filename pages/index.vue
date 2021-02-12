<template>
  <div class="container">
    <div class="reel">
      <!-- TODO: poner auto-play cuando termine pq me estoy enloqueciendo con la
      musica cada segundo -->
      <video height="100%" width="100%" controls>
        <source src="@/assets/video/Reel_2021.mp4" type="video/mp4">
        Tu navegador no tiene soporte para videos.
      </video>
    </div>
    <h3>
      Sebastián López is a freelance motion designer from Colombia.
    </h3>
    <img src="@/assets/images/separator.svg" alt="Separator images">
    <div class="projects">
      <article>
        <nuxt-content :document="testProject"/>
      </article>

    </div>
   </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const testProject = await $content('projects/test_project', { deep: true }).fetch();
    console.log(testProject);
    return {
      testProject,
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 10.6rem 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
}
.reel {
  width: 75vw;
  height: 80vh;
  border-radius: 30px;
  overflow: hidden;
}
img {
 margin: 0 auto;
}
h3 {
  margin: 11.2rem 0;
  font-size: 3.6rem;
  width: 60vw;
}
</style>
