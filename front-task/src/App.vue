<template>
  <div class="p-4">
    <v-input
      v-for="(student, idx) of students"
      :key="idx"
      :name="student.name"
      v-model:age="student.age"
      :image="student.image"
    />
  </div>
</template>

<script setup lang="ts">
import VInput, { type IStudent } from '@/components/v-input/v-input.vue'
import { reactive } from 'vue'

const students = reactive<IStudent[]>([
  {
    name: 'Hugh1',
    age: 345,
    image: 'photo',
  },
  {
    name: 'Hugh2',
    age: 1000000000,
    image: 'photo',
  },
  {
    name: 'Hugh3',
    age: null,
    image: 'photo',
  },
])
</script>

<style></style>
