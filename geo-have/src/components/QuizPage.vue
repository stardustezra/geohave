<template>
    <main class="app">
        <h1>Quiz!</h1>

        <section class="quiz">
            <div class="quiz-info">
                <span class="question">
                    {{  getCurrentQuestion.question }}
                </span>
                <span class="score">
                    Score {{ score }}/{{ questions.length }}
                </span>
            </div>

            <div class="options">
            <label v-for="(option, index) in getCurrentQuestion.options" 
                :key="index"
                :class="`option ${
                    getCurrentQuestion.selected ==index
                    ? index == getCurrentQuestion.answer
                    ? 'correct' : 'wrong' : ''
                    }${
                        getCurrentQuestion.selected != null &&
                        index != getCurrentQuestion.selected
                            ? 'disabled'
                            : ''
                    }`">
                <input type="radio" 
                    :name="getCurrentQuestion.index"
                    :value="index"
            </label>
        </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const questions = ref([
    {
        question: "Hvilken årstid blomstrer kinesisk Paradisæbletræ?",
        answer: 2,
        options: [
            'Sommer',
            'Forår',
            'Efterår',
            'Vinter'
        ], 
        selected: null 
    },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
    let value = 0
    questions.value.forEach(q => {
        if (q.selected === q.answer) {
            value++
        }
    })
    return value 
})

const getCurrentQuestion = computed (() => {
     let question = questions.value[currentQuestion.value]
     question.index = currentQuestion.value
     return question
})

const setAnswer = e => {
    questions.value[currentQuestion.value].selected = e.target.value
    e.target.checked = false
}

const nextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
    } else {
        quizCompleted.value = true
    }
}
</script>


<style scoped>

</style>