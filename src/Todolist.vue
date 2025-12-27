<template>
<h1>Todolist</h1>
<h2 v-if="todolist.length === 0">Tu n'as toujours pas de tâche à faire ?</h2>
<h2 v-else>Tu doit acomplire ces tache !</h2>

<form action="" @submit.prevent="addTask">
    <input type="text" v-model="newTask">
    <button> ajouter une tache</button>
</form>

<ul>
    <li v-for="task in todolist" :key="task.titel">
        <input type="checkbox" v-if="task.completed == false" @click="remouveTask(task)"> {{ task.titel }}
    </li>
</ul>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface Task {
        titel: string;
        completed: boolean;
        date: Date;
    }

    const todolist = ref<Task[]>([])

    const newTask = ref('')

    const addTask = () => {
        todolist.value.push({
            titel: newTask.value,
            completed: false,
            date: new Date()
        })
        newTask.value = ''
    }

    const remouveTask = (task : Task) => {
        todolist.value = todolist.value.filter(tasks => tasks !== task)
    }
</script>
