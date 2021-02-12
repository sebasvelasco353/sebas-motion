<template>
  <div class="projPreview__container" :style="{ backgroundImage: `url(${element.image})`  }" >
    <p>{{ element.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.projPreview__container {
  display: flex;
  flex: 1;
  border-radius: 30px;
  margin: 10em 8em;
}
img {
  width: 100%;
}
p {
  font-family: 'Lato';
  font-weight: 500;
  font-size: 2em;
}
</style>
