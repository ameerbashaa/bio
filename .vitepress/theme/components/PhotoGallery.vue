<script setup>
import photo1 from '../../../IMG_3078.JPG.jpeg'
import photo2 from '../../../IMG_1504.JPG.jpeg'
import photo3 from '../../../WhatsApp Image 2026-08-22 at 2.08.37 PM.jpeg'
import photo4 from '../../../IMG-3094.JPG.jpeg'

const galleryImages = [
  { src: photo2, alt: 'Ameer Basha portrait', label: '' },
  { src: photo4, alt: 'Ameer Basha smiling', label: '' },
  { src: photo3, alt: 'Ameer Basha family moment', label: '' }
]
</script>

<template>
  <section class="gallery-section reveal-up">
    <div class="section-heading">
      <p class="eyebrow">Gallery</p>
      
    </div>

    <div class="gallery-grid">
      <figure v-for="(image, index) in galleryImages" :key="index" :class="['gallery-item', 'gallery-item-' + (index + 1)]">
        <img :src="image.src" :alt="image.alt" />
        
      </figure>
    </div>
  </section>
</template>
