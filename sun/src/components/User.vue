<template>
  <div>
    <h1>User</h1>
    <div>
        <h2>User Id {{id}} </h2>
        <input type="text" v-model="newUser" v-on:input="newUser= id">
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ["id"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
