<template>
  <p>{{   }}</p>
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

</style>
