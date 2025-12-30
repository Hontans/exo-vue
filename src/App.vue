<template>
  <header>
    <nav>
        <ul>
          <li><router-link to="/todolist">Todolist</router-link></li>
          <li><router-link to="/quiz">Quiz</router-link></li>
        </ul>
    </nav>
  </header>

  <main>
    <p>Bonjour, voici quelques petits projets pour apprendre à utiliser Vue.js</p>
    <router-view />
  </main>
</template>

<script setup lang="ts">
</script>