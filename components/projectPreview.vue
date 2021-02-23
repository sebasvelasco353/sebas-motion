<template>
<nuxt-link :to="`projects/${element.slug}`" :style="gridPosition" exact>
  <div class="projPreview__container" :class="isLarge">
    <img class="bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
    <p>{{ element.title }}</p>
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
    /*
      TODO: Si voy a mostrar siempre los ultimos 5 proyectos lo que puedo hacer es definir las 5 areas
      con nombres 1...5 y llamar en el index a los ultimos 5 proyectos y a cada uno asignarle un espacio en grid
      que va de 1...5.

      ahora, cuando este en view de un proyecto deberia poder moverme entre proyectos de formalibrew no solo los ultimos 5
    */
    const finalIndex = index + 1;
    const isLarge = finalIndex % 2 === 0 ? 'large' : null;
    const gridPosition = {
      gridArea: index,
    };
    return {
      isLarge,
      gridPosition,
    };
  },
};
</script>

<style scoped>
.projPreview__container {
  display: flex;
  width: 100%;
  height: 30.5rem;
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

</style>
