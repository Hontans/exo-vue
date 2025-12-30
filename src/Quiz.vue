<template>
    {{ quiz }}
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const quiz = ref(null)

    onMounted(()=> {
        fetch ('../public/quiz.json')
            .then(r => {
                if (r.ok) {
                    return r.json()
                }
                
                throw new Error("le fichier na pas été charger")
            })
    })
</script>