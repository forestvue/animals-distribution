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
                lists: [],
                ref: db.collection("animals")
            }
        },
        firestore() {
            return {
                lists:this.ref.doc(this.$route.params.animal_type).collection("list")
            }
        },
        methods: {
            getData: function(){
                const ref=db.collection("animals").doc(this.$route.params.animal_type).collection("list")
                ref.onSnapshot((querySnapshot)=> {
                    this.lists=[];
                    querySnapshot.forEach(((doc)=> {
                        this.lists.push({
                            age: doc.data().age,
                            imgPath: doc.data().imgPath,
                            name: doc.data().name
                        })
                    }))

                })
                
            }
        },
         //다른 url로 접속해도 data 바뀌게
        watch: {
            "$route.params.animal_type": function(){
                this.getData()
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
