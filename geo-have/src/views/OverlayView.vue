<script setup>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import TaskModal from "../components/TaskModal.vue";
import TaskOverlay from "../components/TaskOverlay.vue";

const tasks = ref([
  {
    id: 1,
    name: "Task 1",
    imageUrl: "...",
    description: "Description of Task 1",
  },
  // Add more tasks as needed
]);

const modalOpen = ref(false);
const selectedTask = ref(null);

const openModal = (task) => {
  selectedTask.value = task;
  modalOpen.value = true;
};
</script>

<template>
  <Navbar />
  <TaskModal v-if="modalOpen" :task="selectedTask" @close="modalOpen = false" />
  <div>
    <div v-for="task in tasks" :key="task.id">
      <h3>{{ task.name }}</h3>
      <img :src="task.imageUrl" alt="Task Image" />
      <p>{{ task.description }}</p>
      <button @click="openModal(task)">View Details</button>
    </div>

    <!-- Render modal dynamically -->
    <router-view
      v-if="modalOpen"
      :task="selectedTask"
      @close="modalOpen = false"
    />
  </div>
  <TaskOverlay />
</template>
