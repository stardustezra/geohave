<template>
  <div class="overlay-wrapper">
    <div class="wrapper">
      <h3>Skattejagtens begyndelse</h3>
      <p class="paragraph">
        Når du er klar til at udforske og finde skatten, skal du holde øje med
        QR-koder langs din vej. Du kan bruge kameraikonet til at scanne
        QR-koderne og afsløre ledetråde, der fører dig nærmere skatten.
      </p>
      <div>
        <button @click="toggleModal" type="button">1. OPGAVE</button>
      </div>
    </div>
  </div>
  <TaskModal @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content"></div>
  </TaskModal>
</template>

<script>
import TaskModal from "./TaskModal.vue";
import { ref } from "vue";
export default {
  name: "TaskOverlay",
  components: {
    TaskModal,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
.overlay-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: white;
  z-index: 999; /* Ensure it's above other content */
  display: flex;
  border-radius: 20px 20px 0px 0px;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5); /* Add drop shadow */
}

.wrapper {
  width: 100%; /* Adjust the width of the content wrapper */
  padding: 2em;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.paragraph {
  margin-bottom: 20px;
}

button {
  background-color: var(--btn-soft-green);
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  border: none;
  border-radius: 4px;
  width: 100%;
  text-align: left;
}

button:hover {
  background-color: var(--btn-on-click-green);
}
</style>
