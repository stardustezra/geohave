<script setup>
import router from "@/router";
import { ref, onMounted, watch } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";
import { db } from "@/configs/firebase";
import { collection, updateDoc, doc, getDocs } from "firebase/firestore";

const UserId = "1"; //todo: laves om til global
const UserPointsOnline = ref(300);

const goToNextTask = () => {
  const userRef = doc(db, "users", UserId);
  updateDoc(userRef, {
    Points: UserPointsOnline.value + points.value,
  });
  router.push("/skattejagt/kort");
};

const points = ref(0);

// Simulating points increment over time
const targetPoints = 20;
const animationDuration = 1000; // milliseconds
const pointsPerSecond = targetPoints / (animationDuration / 1000);
let currentPoints = 0;

const updatePoints = async () => {
  if (currentPoints < targetPoints) {
    currentPoints += pointsPerSecond / 60; // assuming 60 FPS
    points.value = Math.min(Math.ceil(currentPoints), targetPoints);
    requestAnimationFrame(updatePoints);
  }
};

onMounted(() => {
  // Start the animation
  updatePoints();
});

onMounted(async () => {
  const querySnapshotUserPoints = await getDocs(collection(db, "users"));
  querySnapshotUserPoints.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    if (doc.id === UserId) {
      UserPointsOnline.value = doc.data().Points;
    }
  });
});

const maxPointsReached = ref(false);

// Watching for points reaching the maximum
const checkMaxPoints = () => {
  if (points.value === targetPoints && !maxPointsReached.value) {
    maxPointsReached.value = true;
    const circle = document.querySelector(".circle");
    circle.classList.add("pop-out");
    setTimeout(() => {
      circle.classList.remove("pop-out");
    }, 500);
  }
};

// Watch for points changes and trigger the animation if max points reached
watch(points, () => {
  checkMaxPoints();
});
</script>

<template>
  <div class="wrapper" :class="{ 'confetti-active': maxPointsReached }">
    <h1>Quiz!</h1>
    <div class="container">
      <div class="point-obtained">
        <h2>Point Optjent</h2>
      </div>
      <div class="points-counter">
        <confettiExplosion class="confetti" v-if="maxPointsReached" />
        <div class="circle" :class="{ 'pop-out': maxPointsReached }">
          <span class="points">{{ points }}</span>
        </div>
      </div>
      <button @click="goToNextTask">Næste</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: "Kameron", serif;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 2em;
}

.quiz {
  font-family: "Kamaron", serif;
  font-weight: 700;
  font-style: bold;
  font-size: 34px;
}

h2 {
  font-family: "Kameron", serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  font-size: 36px;
}

.points {
  font-family: "Kameron", serif;
  font-style: bold;
  font-weight: 500;
  font-size: 1.5em;
}

.points-counter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  margin-top: 1em;
  margin-bottom: 6em;
  position: relative;
  width: 234px;
  height: 234px;
  border-radius: 50%;
  background-color: var(--primary-yellow);
  color: black;
  font-size: 24px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adjust values as needed */
}

.confetti {
  position: absolute;
  z-index: -9999; /* Ensure confetti is behind the circle */
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 89px;
  margin-top: 15px;
  background-color: #f1f1f1;
  color: #000;
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  width: 189px;
  height: 55px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Tilføj skyggeeffekt */
}

.circle span {
  z-index: 9999;
  transition: 0.5s ease-in-out;
}

@keyframes pop-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.pop-out {
  animation: pop-out 0.5s ease;
}
</style>
