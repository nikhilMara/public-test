<script setup lang="ts">
import {
    ArrowLeftIcon,
    ArrowRightIcon,
} from '@gohighlevel/ghl-icons/24/outline'
import { HLCarousel, HLSpace } from '@gohighlevel/highrise'
import { inject } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

// Carousel items
const items = [
  {
    key: 1,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  },
  {
    key: 2,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
  },
  {
    key: 3,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  },
]

const updateCurrentIndex = (currentIndex: number, lastIndex: number) => {
  console.log('Current Index:', currentIndex, 'Last Index:', lastIndex)
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default Carousel -->
      <div>
        <h2>Default Carousel</h2>
        <HLCarousel
          id="carousel-default"
          :carouselItems="items"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Arrows -->
      <div>
        <h2>Carousel with Arrows</h2>
        <HLCarousel
          id="carousel-arrows"
          :carouselItems="items"
          :showArrow="true"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Auto Play -->
      <div>
        <h2>Carousel with Auto Play</h2>
        <HLCarousel
          id="carousel-autoplay"
          :carouselItems="items"
          :autoPlay="true"
          :interval="3000"
          :showDots="true"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Different Dot Types -->
      <div>
        <h2>Carousel with Line Dots</h2>
        <HLCarousel
          id="carousel-line-dots"
          :carouselItems="items"
          :showDots="true"
          dotType="line"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Multiple Items Per View -->
      <div>
        <h2>Multiple Items Per View</h2>
        <HLCarousel
          id="carousel-multiple"
          :carouselItems="items"
          :itemsPerView="2"
          :spaceBetweenItems="20"
          :showArrow="true"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Card Effect -->
      <div>
        <h2>Card Effect</h2>
        <HLCarousel
          id="carousel-card"
          :carouselItems="items"
          effect="card"
          :showArrow="true"
          :centeredItems="true"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Fade Effect -->
      <div>
        <h2>Fade Effect</h2>
        <HLCarousel
          id="carousel-fade"
          :carouselItems="items"
          effect="fade"
          :showArrow="true"
          :autoPlay="true"
          :interval="2000"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>

      <!-- Carousel with Custom Render -->
      <div>
        <h2>Custom Render Carousel</h2>
        <HLCarousel
          id="carousel-custom"
          :showArrow="true"
          @onUpdatedIndex="updateCurrentIndex"
        >
          <template #customRender>
            <a href="https://google.com" target="_blank">
              <img
                style="width: 100%; height: 240px; object-fit: cover"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
              />
            </a>
            <a href="https://google.com" target="_blank">
              <img
                style="width: 100%; height: 240px; object-fit: cover"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
              />
            </a>
            <a href="https://google.com" target="_blank">
              <img
                style="width: 100%; height: 240px; object-fit: cover"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
              />
            </a>
          </template>
        </HLCarousel>
      </div>

      <!-- Carousel with Custom Controls -->
      <div>
        <h2>Custom Controls</h2>
        <HLCarousel
          id="carousel-custom-controls"
          :carouselItems="items"
          :showDots="true"
          :showArrow="true"
          @onUpdatedIndex="updateCurrentIndex"
        >
          <template #customArrows="{ total, to, currentIndex, prev, next }">
            <div class="custom-arrow">
              <button type="button" class="custom-arrow--left" @click="prev">
                <ArrowLeftIcon class="w-5 h-5" />
              </button>
              <button type="button" class="custom-arrow--right" @click="next">
                <ArrowRightIcon class="w-5 h-5" />
              </button>
            </div>
          </template>

          <template #customDots="{ total, currentIndex, changeTo }">
            <ul class="custom-dots">
              <li
                v-for="index of total"
                :key="index"
                :class="{ ['is-active']: currentIndex === index - 1 }"
                @click="changeTo(index - 1)"
              />
            </ul>
          </template>
        </HLCarousel>
      </div>

      <!-- Vertical Carousel -->
      <div>
        <h2>Vertical Carousel</h2>
        <div style="height: 400px">
          <HLCarousel
            id="carousel-vertical"
            :carouselItems="items"
            direction="vertical"
            :showArrow="true"
            @onUpdatedIndex="updateCurrentIndex"
          />
        </div>
      </div>

      <!-- Carousel with Different Dot Placements -->
      <div>
        <h2>Top Dot Placement</h2>
        <HLCarousel
          id="carousel-dot-top"
          :carouselItems="items"
          :showDots="true"
          dotPlacement="top"
          @onUpdatedIndex="updateCurrentIndex"
        />
      </div>
    </HLSpace>
  </div>
</template>

<style scoped>
.custom-arrow {
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 20px;
  z-index: 10;
}

.custom-arrow--left,
.custom-arrow--right {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.custom-arrow--left:hover,
.custom-arrow--right:hover {
  background: rgba(255, 255, 255, 1);
}

.custom-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  margin: 0;
  list-style: none;
}

.custom-dots li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  cursor: pointer;
  transition: background 0.3s;
}

.custom-dots li.is-active {
  background: #3b82f6;
}

.custom-dots li:hover {
  background: #9ca3af;
}
</style>
