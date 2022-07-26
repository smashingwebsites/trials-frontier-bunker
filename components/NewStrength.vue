<template>
  <div class="relative text-white rounded" :class="playerStrengthColor">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 absolute left-2 top-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      /></svg
    >
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
