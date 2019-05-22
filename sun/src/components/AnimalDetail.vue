<template>
    <div>
        <h1>{{$route.params.animal_type}}</h1>
        <ul class="animaltype_list">
            <li v-for="list in lists" v-bind:key="list.key">
                <img :src="list.imgPath">
                <p>age: {{list.age}}</p>
                <p>name: {{list.name}}</p>
            </li>
        </ul> 
    </div>
</template>

<script>
    import {db} from "../firebase.js"
    export default {
        name: "animalDetail",
        data() {
            return {
                lists: []
            }
        },
        firestore() {
            return {
                lists:db.collection("animals").doc(this.$route.params.animal_type).collection("list")
            }
        }
    }
</script>

<style scoped>
    .animaltype_list img{
        height: 180px;
        width: 230px;
    }
</style>
