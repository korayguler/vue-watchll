<template>
  <h2 class="text-center mt-5">new-movie</h2>
  <div class="container d-flex justify-content-center">
    <form class="col-6 mt-5" @submit.prevent="">
      <div class="form-group">
        <label for="movieName">movie-name</label>
        <input
          id="movieName"
          class="form-control"
          type="text"
          placeholder="type movie name..."
        />
      </div>

      <div class="form-group">
        <label for="moviePoster">movie-poster-url</label>
        <input
          id="moviePoster"
          class="form-control"
          type="text"
          placeholder="type poster url..."
        />
      </div>

      <div class="form-group">
        <label for="movieCategory">movie-category</label>
        <div class="form-group">
          <select multiple class="form-control" id="movieCategory">
            <option v-for="(category, index) in categories" :key="index">
              {{ category }}
            </option>
          </select>
        </div>
        <small id="movieCategory" class="form-text text-muted">
          multiple-selection
        </small>
      </div>
      <div class="form-group d-flex float-right">
        <router-link to="/" class="btn btn-secondary">Go to Home</router-link>
        <input
          type="submit"
          class="btn btn-primary ml-2"
          value="Add The Movie"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categories: ['action', 'drama', 'horror'],
    };
  },
  components: {},
};
</script>
