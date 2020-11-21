<template>
  <button type="button" class="btn btn-outline-primary btn-lg static-btn">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="bi bi-plus-circle"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fill-rule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style>
.static-btn {
  position: fixed;
  bottom: 60px;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 100%;
}
</style>
