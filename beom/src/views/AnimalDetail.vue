<template>
  <div>
      <router-link class="link-button" to="/dashboard">back</router-link>
    <h1>{{this.$route.params.animal_type}}</h1>
    <!-- <div v-for="animal in animals" v-bind:key="animal">{{animal}}</div> -->
    <list :datas="animals"/>
  </div>
</template>

<script>
import List from "../components/List.vue";
import { db } from "../main";
export default {
  data() {
    return {
      animals: []
    };
  },
  created() {
      var animal_type = this.$route.params.animal_type;
      db.collection("animals")
        .doc(animal_type)
        .collection("list")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.animals.push(doc.data());
          });
        });
  },
  components: {
    list: List
  }
};
</script>

<style scoped>
h1 {
    margin-top: 32px;
}
</style>
