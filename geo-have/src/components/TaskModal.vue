<template>
  <div class="modal">
    <div class="modal-content">
      <img src="../assets/images/paradisaebletrae.png" alt="Task Image" />
      <h2>{{ task.name }}</h2>
      <p>{{ task.description }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("close");
    };

    return {
      closeModal,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

button {
  margin-top: 10px;
}
</style>
