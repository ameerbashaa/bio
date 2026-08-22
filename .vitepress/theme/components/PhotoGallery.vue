<script setup>
import photo1 from '../../../IMG_3078.JPG.jpeg'
import photo2 from '../../../IMG_3080.JPG.jpeg'
import photo3 from '../../../WhatsApp Image 2026-08-22 at 2.08.37 PM.jpeg'

const galleryImages = [
  { src: photo1, alt: 'Ameer Basha portrait', label: 'Portrait' },
  { src: photo2, alt: 'Ameer Basha smiling', label: 'Smile' },
  { src: photo3, alt: 'Ameer Basha family moment', label: 'Smile' }
]
</script>

<template>
  <section class="gallery-section reveal-up">
    <div class="section-heading">
      <p class="eyebrow">Gallery</p>
      <h2>Moments to remember</h2>
    </div>

    <div class="gallery-grid">
      <figure v-for="(image, index) in galleryImages" :key="index" :class="['gallery-item', 'gallery-item-' + (index + 1)]">
        <img :src="image.src" :alt="image.alt" />
        <figcaption>{{ image.label }}</figcaption>
      </figure>
    </div>
  </section>
</template>
