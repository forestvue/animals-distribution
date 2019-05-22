<template>
  <div id="app">
    <header class="app-header">
      <app-nav></app-nav>
      <router-view />
      
    </header>
    
    <footer class="app-footer">
    </footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'


export default {
  components: {
    AppNav
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding : 0;
  background-color: #ffffcc;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color :#d35400;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
