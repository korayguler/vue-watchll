<template>
  <form>
    <div class="form-group">
      <label for="movie-name">Movie</label>

      <input
        id="movie-name"
        class="form-control"
        type="text"
        placeholder="movie name"
      />
    </div>

    <div class="form-group">
      <label for="movie-category">Category</label>
      <select class="form-control" multiple id="movie-category">
        <option v-for="category in categories" :key="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [
        { id: '1', name: 'Action' },
        { id: '2', name: 'Comendy' },
        { id: '3', name: 'Drama' },
        { id: '4', name: 'Fantasy' },
        { id: '5', name: 'Horror' },
        { id: '6', name: 'Mystery' },
        { id: '7', name: 'Romance' },
        { id: '8', name: 'Thriller' },
      ],
    };
  },
};
</script>
