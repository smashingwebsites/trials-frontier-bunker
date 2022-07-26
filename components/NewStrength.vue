<template>
  <div class="relative text-white rounded" :class="playerStrengthColor">
    <ScaleIcon class="w-4 h-4 absolute left-2 top-1.5"/>
    <select
      style="background-image: none;"
      class="relative py-1 pr-2 text-sm text-center bg-transparent border-none rounded outline-none pl-7"
      v-model="strength"
      @change="$emit('changeStrength', playerId, strength)"
    >
      <option v-for="tag in tagRating" :key="tag" :value="tag.value">
        {{ tag.label }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ScaleIcon } from '@heroicons/vue/solid'

const props = defineProps(["strength"]);
const tagRating = [
  {value: 0, label: 'N/A'},
  {value: 1, label: 'Easy'},
  {value: 2, label: 'Medium'},
  {value: 3, label: 'Hard'},
  {value: 4, label: 'Unbeatable'}
]

const playerStrengthColor = computed(() => {
  if (props.strength === 1) {
    return "bg-emerald-900";
  }
  if (props.strength === 2) {
    return "bg-sky-700";
  }

  if (props.strength === 3) {
    return "bg-violet-800";
  }

  if (props.strength === 4) {
    return "bg-red-900";
  }

  return "bg-gray-400";
});
</script>
