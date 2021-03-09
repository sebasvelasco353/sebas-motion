<template>
  <!-- TODO: create custom layout for projects page, header needs to be 100vw  -->
  <div>
    <section class="header">
      <img :src="require(`@/assets/images/${project.image}`)" :alt="project.title">
      <h1>{{ project.title  }}</h1>
    </section>
    <section class="content">
      <nuxt-content :document="project" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch();
    return { project };
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  height: 40vh;
  width: 100vw;
  top: 0;
  left: 0;
}
.content {
  @apply min-h-full;
  padding-top: 40vh;
}
img {
  width: 100%;
  height: 100%;
  @apply object-cover;
  position: absolute;
  filter: opacity(70%);
  top: 0;
  left: 0;
  z-index: 0;
}
h1 {
  color: white;
  font-size: 3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.nuxt-content p {
  /*@apply md:w-2/4;*/
  width: 50%;
  @apply md:text-3xl;
}
</style>
