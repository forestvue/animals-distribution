<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0%;
  margin: 0%;
}

.link-button {
        border: 1px solid black;
        padding: 16px;
    }
</style>
