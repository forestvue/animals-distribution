<template>
  <div>
    <ul>
      <li v-for="data in datas" v-bind:key="data.animal_id">
        <div v-if="data.name == undefined">
          <router-link :to="'dashboard/'+data.animal_id">{{data.animal_id}}</router-link>
        </div>
        <div v-else>
            <span>{{data.name}}</span>
            <span>{{data.age}}</span>
            <img :src="data.imgPath" alt="">
            </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["datas"],
};
</script>

<style>
</style>
