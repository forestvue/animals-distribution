<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'User',
  created: function () {
    this.$db.collection('animals')
      .get()
      .then((res) => {
        res.forEach((doc) => console.log(doc.id))
      })
  }
}
</script>

<style scoped>

</style>
