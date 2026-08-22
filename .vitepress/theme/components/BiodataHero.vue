<script setup>
import photo1 from '../../../IMG_3078.JPG.jpeg'
import photo2 from '../../../IMG_3080.JPG.jpeg'
import photo3 from '../../../WhatsApp Image 2026-08-22 at 2.08.37 PM.jpeg'
import AgeDisplay from './AgeDisplay.vue'
</script>

<template>
  <section class="hero-shell">
    <div class="hero-orbit orbit-one"></div>
    <div class="hero-orbit orbit-two"></div>
    <div class="decor-crescent"></div>

    <div class="hero-grid">
      <div class="hero-copy reveal-up">
        <div class="mini-brand">بِسْمِ ٱللّٰهِ</div>
        <p class="eyebrow">Marriage Biodata</p>
        <h1>Ameer Basha J</h1>
        <p class="subtitle">
          A respectful, family-oriented Muslim groom from Bengaluru seeking a compatible life partner
          who shares values, faith, and a warm, happy future based on love, trust, and barakah.
        </p>

        <div class="hero-badges">
          <span><AgeDisplay /></span>
          <span>Python Developer</span>
          <span>Bengaluru</span>
        </div>

        <div class="hero-actions">
          <a class="primary-btn" href="#contact">Contact Me</a>
          <a class="secondary-btn" href="#profile">Explore Details</a>
        </div>
      </div>

      <div class="profile-card reveal-up">
        <div class="photo-stack">
          <img :src="photo1" alt="Ameer Basha portrait" class="main-photo" />
          <img :src="photo2" alt="Ameer Basha smiling" class="floating-photo photo-top" />
          <div class="profile-badge">Single • Muslim</div>
        </div>

        <ul class="mini-list">
          <li><span>Gender</span><strong>Male</strong></li>
          <li><span>Born</span><strong>16 Nov 1997</strong></li>
          <li><span>Height</span><strong>5'7"</strong></li>
          <li><span>Complexion</span><strong>Wheatish fair</strong></li>
          <li><span>Current role</span><strong>Python Developer</strong></li>
        </ul>
      </div>
    </div>
  </section>
</template>
