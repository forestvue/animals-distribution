<template>
  <div class="list-container">
    <ul>
      <li v-for="(data, index) in datas" v-bind:key="data.animal_id">
        <div v-if="data.name == undefined">
          <router-link
            :style="{color: setColor(index)}"
            class="link-button"
            :to="'dashboard/'+data.animal_id"
          >{{data.animal_id}}</router-link>
        </div>
        <div class="animal-card" v-else>
          <img :src="data.imgPath" alt>
          <span>name : {{data.name}}</span>
          <span>age : {{data.age}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["datas"],
  computed: {
    // 계산된 getter
    setColor: function() {
      // `this` 는 vm 인스턴스를 가리킵니다.

      return index => {
        console.log(index);

        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
}

li {
  margin: 16px;
}

.animal-card {
  border: 1px solid blue;
  width: 200px;
  display: flex;
  flex-direction: column;
}

.animal-card img {
  width: 200px;
  height: 200px;
}

.animal-card span {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>