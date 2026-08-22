<script setup>
import { computed } from 'vue'

const birthDate = new Date('1997-11-16T00:00:00')

const age = computed(() => {
  const today = new Date()
  let calculatedAge = today.getFullYear() - birthDate.getFullYear()

  const birthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  if (!birthdayPassedThisYear) {
    calculatedAge -= 1
  }

  return calculatedAge
})
</script>

<template>
  <span>{{ age }} years</span>
</template>
