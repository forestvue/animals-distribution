<template>
   <div>
     <h3>List of Users</h3>
     <ul class="userlist">
        <li>
          <router-link to="/user/1">user 1</router-link>
          <router-link to="/user/2">user 2</router-link>
        </li>
     </ul>
   </div>
</template>

<script>
export default {
  name: 'Userlist'
}
</script>

<style scoped>

</style>
