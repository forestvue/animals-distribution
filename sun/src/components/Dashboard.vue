<template>
    <div id="dashboard">
        <h1>AnimalList</h1>
        <input type="text" v-model="newAnimal" 
        v-on:keyup.enter="addNewAnimal"
        placeholder="Add Animals"
        >
        <button v-on:click="addNewAnimal">Add</button>    
        
        <ul class="animalList">
            <li v-for="animal in animals" 
                v-bind:key="animal.id" >
                <router-link :to="{name: 'animal_type', params: {animal_type: animal.animal_id}}">
                    {{animal.animal_id}}
                </router-link>
                
                <button v-on:click="deleteAnimal(animal)">
                    X
                </button> 
                
            </li>
        </ul>
    </div>
</template>

<script>
    import {db} from "../firebase.js"

    export default {
        name: "dashboard",
        data(){
            return{
                animals: []
            }
        },
        firestore(){
            return {
                animals: db.collection("animals")
            }
        },
        methods: {
            addNewAnimal: function(){
                db.collection("animals").add({
                    name: this.newAnimal
                });
                this.newAnimal="";
            },
            deleteAnimal : function(animal){
                db.collection("animals").doc(animal['.key']).delete();
            }
            //상세 데이터를 router에 반영 (router.push)
            // animalDetail: function(animal_id) {
            //     this.$router.push({name: "animaldetail", params: {animal_type: animal_id}})
    
            // }
        }
    }

</script>

<style>
    #dashboard {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

    }

    input{
        width: 200px;
        line-height: 24px;
        border: 1px solid #ff9478;
        border-radius: 0.4rem;

    }

    button {
        background-color: #ff9478;
        color: white;
        padding: 6px 10px;
        border-radius: 3px;
    }
    
</style>
