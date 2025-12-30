<template>
    <nav>
        <ul>
            <li><a href="./Todolist.vue">Todolist</a></li>
            <li><a href="./Quiz.vue">Quiz</a></li>
        </ul>
    </nav>

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


    <button @click="showCompleted = !showCompleted">Afficher les tâches accomplies</button>
    <ul v-if="showCompleted">    
        <li v-for="task in taskEnded" :key="task.titel">
            <input type="checkbox" checked disabled> {{ task.titel }}
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

    const taskEnded = ref<Task[]>([])

    const showCompleted = ref(false)

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
        task.completed = true
        todolist.value = todolist.value.filter(tasks => tasks !== task)
        taskEnded.value.push(task)
    }
</script>
