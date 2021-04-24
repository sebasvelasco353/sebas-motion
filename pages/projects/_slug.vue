<template>
  <div>
    Hello
    <img :src="project.thumbnail" alt="">
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  async asyncData({ $content, app, params }) {
    const project = await $content(`projects/`, params.slug).fetch();
    console.log(project);
    return { project };
  },
};
</script>

<style scoped>
</style>
