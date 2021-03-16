<template>
  <div>
    <section class="header">
      <img :src="require(`@/assets/images/${project.image}`)" :alt="project.title">
      <h1>{{ project.title }}</h1>
    </section>
    <section class="content">
      <p>{{ project.introText.ES }}</p>
      <div class="flex flex-col my-10 md:flex-row content-images">
        <img :src="require(`@/assets/images/${project.image2}`)" alt="${project.altText2}" class="flex-1 my-4 box-border md:w-2/4 md:pr-4 md:my-0">
          <img :src="require(`@/assets/images/${project.image3}`)" alt="${project.altText3}" class="flex-1 my-4 md:w-2/4 box-border md:pl-4 md:my-0">
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
