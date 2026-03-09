<template>
  <div class="carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div
        class="carousel-slide"
        v-for="(slide, i) in slides"
        :key="i"
        :style="{ background: slide.bg }"
      >
        <img v-if="slide.src" :src="slide.src" :alt="slide.alt" />
        <div v-else class="carousel-placeholder">
          <span class="carousel-placeholder-icon" v-html="vehicleIcon"></span>
          <span class="carousel-placeholder-label">{{ slide.label }}</span>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <button v-if="slides.length > 1" class="carousel-arrow carousel-arrow--prev" @click.stop="prev" aria-label="Previous">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <button v-if="slides.length > 1" class="carousel-arrow carousel-arrow--next" @click.stop="next" aria-label="Next">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>

    <!-- Dots -->
    <div v-if="slides.length > 1" class="carousel-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="carousel-dot"
        :class="{ active: current === i }"
        @click.stop="current = i"
        :aria-label="`Go to slide ${i + 1}`"
      ></button>
    </div>

    <!-- Badge slot -->
    <slot name="badge"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
  vehicleIcon: {
    type: String,
    default: ''
  }
})

const current = ref(0)

function prev() {
  current.value = current.value === 0 ? props.slides.length - 1 : current.value - 1
}

function next() {
  current.value = current.value === props.slides.length - 1 ? 0 : current.value + 1
}
</script>

<style scoped>
.carousel {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.carousel-placeholder-icon {
  opacity: 0.3;
}

.carousel-placeholder-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

/* Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background: rgba(0,0,0,0.35);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background var(--transition), transform var(--transition);
  backdrop-filter: blur(4px);
}

.carousel-arrow:hover {
  background: rgba(0,0,0,0.55);
}

.carousel-arrow--prev { left: 10px; }
.carousel-arrow--next { right: 10px; }

.carousel-arrow--prev:hover { transform: translateY(-50%) translateX(-1px); }
.carousel-arrow--next:hover { transform: translateY(-50%) translateX(1px); }

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 10;
}

.carousel-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all var(--transition);
}

.carousel-dot.active {
  background: var(--white);
  width: 20px;
  border-radius: 4px;
}
</style>
