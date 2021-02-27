<template>
<nuxt-link :to="`${element.path}`" class="w-full mx-0 my-12"  exact>
  <div class="relative flex items-center justify-center projPreview__container">
    <img class="m-0 opacity-70 bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
    <p class="absolute z-30 text-3xl break-words w-60 ">{{ element.title }}</p>
  </div>
</nuxt-link>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data({ index }) {
    console.log(index);
    return {
      test: true,
    };
    /* const finalIndex = index + 1;
    const isLarge = finalIndex % 2 === 0 ? 'large' : null;
    const gridPosition = {
      gridArea: index === 0 ? 'a' : index.toString(),
    };
    return {
      isLarge,
      gridPosition,
    }; */
  },
};
</script>

<style scoped>
/*a {
  width: 100%;
  max-height: 28rem;
}
.projPreview__container {
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.large {
  height: 60.7rem;
}
.bg {
  width:100%;
  height: 100%;
  position: absolute ;
  filter: brightness(60%);
}
p {
  font-family: 'Lato';
  font-weight: 500;
  position: absolute;
  font-size: 2rem;
  color: #FFFFFF;
}
 */
</style>
