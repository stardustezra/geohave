<script>
export default {
  name: "modalActive",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>

<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <span @click="close" class="material-symbols-outlined"></span>
          <!-- modal content -->
          <img src="../assets/images/paradisaebletrae.png" alt="Task Image" />
          <slot />
          <button @click="close" type="button">Close</button>
        </div>
      </transition>
    </div>
  </transition>

  <div class="modal-wrapper"></div>

  <button @click="isOpen = true">Open Modal</button>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="isOpen = false">&times;</span>
      <img src="../assets/images/paradisaebletrae.png" alt="Task Image" />
      <h2>{{ task.name }}</h2>
      <p>{{ task.description }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: grid;
  place-items: center;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 0, 25em;
}

.modal-header {
  font-weight: bold;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--color-primary-green);
}

.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
