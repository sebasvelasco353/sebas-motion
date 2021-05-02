<template>
  <article>
    <h1>{{ project.title }}</h1>
    <div class="row">
      <nuxt-content :document="project" />
      <img :src="require(`~/assets/images/projects/${getFileName(project.thumbnail)}`)" alt="">
    </div>
    <div class="row">
      <img :src="require(`~/assets/images/projects/${getFileName(project.thumbnail2)}`)" alt="">
      <img :src="require(`~/assets/images/projects/${getFileName(project.thumbnail3)}`)" alt="">
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    getFileName(route) {
      /* return route.split("/"); */
      const fileName = route.split("/");
      console.log(fileName[fileName.length-1]);
      return fileName[fileName.length-1];
    }
  },
  async asyncData({ $content, app, params }) {
    const project = await $content(`projects/`, params.slug).fetch();
    return { project };
  },
};
</script>

<style scoped>
p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
}
.row {
  display: flex;
  flex-direction: row;
}
.row img {
  width: 48%;
}
</style>
