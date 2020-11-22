<template>
  <div class="container col-8 mt-5 d-flex justify-content-center">
    <div class="card-columns">
      <Card
        name="Orígenes secretos"
        category="[drama,222]"
        poster="https://image.tmdb.org/t/p/w600_and_h900_bestv2/t28nWRyiwT2cI0KwXYLPwnNltUV.jpg"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  components: {
    Card,
  },
};
</script>
