<template>
  <div class="overlay-wrapper">
    <div class="wrapper">
      <h2>Skattejagtens begyndelse</h2>
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
  <!-- modal component -->
  <Modal
    @close="toggleModal"
    @okClicked="toggleTreasureAreas"
    :modalActive="modalActive"
  >
    <div class="modal-content">
      <img src="@/assets/images/paradisaebletrae.png" alt="apple tree" />
      <h3>Find paradisæbletræ</h3>
      <h4>Hint:</h4>
      <p>
        Søg efter et sted, hvor den gamle mur står vagt, og dragerne danser i
        vinden.
      </p>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";
const emit = defineEmits(["toggleTreasureAreas"]);

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const toggleTreasureAreas = () => {
  emit("toggleTreasureAreas");
};
</script>

<style scoped>
.overlay-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: var(--background-color);
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

img {
  border-radius: 4px;
}

h2 {
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

.modal-content {
  display: flex;
  flex-direction: column;

  h3,
  p {
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Kamerom", serif;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  h4 {
    font-weight: bold;
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }
}
</style>
