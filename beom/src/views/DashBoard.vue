<template>
  <div>
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
    db.collection("animals")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log(doc.data());
          this.animals.push(doc.data());
        });
      });
  },
  components: {
    list: List
  }
};
</script>

<style>
</style>