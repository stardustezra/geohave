<script setup>
import { ref, onMounted, watch } from "vue";

const points = ref(0);

// Simulating points increment over time
const targetPoints = 20;
const animationDuration = 1000; // milliseconds
const pointsPerSecond = targetPoints / (animationDuration / 1000);
let currentPoints = 0;

const updatePoints = () => {
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
  <div class="wrapper">
    <h1>Quiz!</h1>
    <div class="point-obtained">
      <h2>Points Optjent</h2>
    </div>
    <div class="points-counter">
      <div class="circle">
        <span class="points"> + {{ points }} Point</span>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_regular.ttf") format("truetype");
  font-weight: normal;
}

@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_bold.ttf") format("truetype");
  font-weight: bold;
}

@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_medium.ttf") format("truetype");
}

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  margin-top: 60px;
}

h1 {
  font-family: "Stag";
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 10px;
}

.quiz {
  font-family: "Stag", sans-serif;
  font-weight: bold;
  font-size: 34px;
}

.point-obtained {
  font-family: "Stag", sans-serif;
  font-weight: normal;
  text-align: center;
}

.points {
  font-family: "Stag", sans-serif;
  font-weight: normal;
  font-size: 1.5em;
}

.points-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.circle {
  width: 234px;
  height: 234px;
  border-radius: 50%;
  background-color: var(--primary-yellow);
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adjust values as needed */
}

.circle span {
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
