
<template>
  <div>
    <h1>Home</h1>
    <p>My First vue homepage!</p>
    <span>Message for you: {{message}}</span>

    <div id="todo">
      <input v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add to do"
      >
      <ul v-if="todos.length">
        <li v-for="(todo,index) in todos" 
          v-bind:key="todo.id" 
          v-bind:list="todo.list">
          {{todo.list}}
          <button v-on:click="todos.splice(index,1)">X</button>
        </li>
      </ul>
      <p v-else>Complete all your tasks!</p>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "Home",
  data(){
    return{
      message: "Fighting!",
      newTodoText: "",
      todos: [
        {id:1, list: "Vue study"},
        {id:2, list: "SQL study"},
      ],
      nextTodoId: 3
    }
  },
  methods: {
    addNewTodo : function(){
      this.todos.push({
        id: this.nextTodoId++,
        list: this.newTodoText
      })
      this.newTodoText=""
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
