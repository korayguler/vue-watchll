<template>
  <Nav />
  <StaticButton />
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card-columns">
      <Card title="Selamlar" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import StaticButton from './components/StaticButton.vue';
import Card from './components/Card.vue';
export default {
  name: 'App',
  components: {
    Nav,
    StaticButton,
    Card,
  },
};
</script>
