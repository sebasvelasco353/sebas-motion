<template>
  <div class="container">
    <p>{{ project.title }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch();
    console.log(project);
    return {
      project,
    };
  },
};
</script>

<style>
p {
  color: white;
  font-size: 1.6rem;
}
</style>
