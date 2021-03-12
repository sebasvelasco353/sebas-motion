<template>
  <div>
    <section class="header">
      <img :src="require(`@/assets/images/${project.image}`)" :alt="project.title">
      <h1>{{ project.title }}</h1>
    </section>
    <section class="content">
      <p class="w-full mx-0 d:w-3/4 lg:w-2/4">{{ project.introText.ES }}</p>
      <div class="flex flex-row my-10 content-images">
        <img :src="require(`@/assets/images/${project.image2}`)" alt="${project.altText2}" class="flex-1 pr-4">
        <img :src="require(`@/assets/images/${project.image3}`)" alt="${project.altText3}" class="flex-1 pl-4">
      </div>
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
  height: 60vh;
  width: 100%;
  top: 0;
  left: 0;
}
.content {
  @apply min-h-full;
  @apply text-white;
  @apply text-2xl;
  padding-top: 60vh;
}
.header img {
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
</style>
