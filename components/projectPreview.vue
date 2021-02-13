<template>
  <div class="projPreview__container" :style="{backgroundImage: `url(${element.image})`}" >
    <div class="inner">
      <p>{{ element.title }}</p>
    </div>
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
  margin: 10rem 8rem;
  width: 100%;
  height: 305px;
  flex: 1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
}
p {
  font-family: 'Lato';
  font-weight: 500;
  font-size: 2rem;
  color: #FFFFFF;
  opacity: 1;
}

</style>
