<template>
  <div>
    <h1>ani</h1>
    <!-- <div v-for="animal in animals" v-bind:key="animal">{{animal}}</div> -->
    <list :datas="animals"/>
  </div>
</template>

<script>
import List from "../components/List.vue";
import { db } from "../main";
// console.log(db
//         .collection("animals")
//         .doc("dog")
//         .collection("list"));

export default {
  data() {
    return {
      animals: []
    };
  },
  created() {
      console.log(this.$route.params.animal_type);
      if(this.$route.params.animal_type != null) {
      var animal_type = this.$route.params.animal_type;
      db.collection("animals").doc(animal_type).collection('list')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());
            this.animals.push(doc.data());
          });
        });
      }else {
          db.collection("animals")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.animals.push(doc.id);
          });
        });
      }
  },
  components: {
    list: List
  }
};
</script>

<style>
</style>
