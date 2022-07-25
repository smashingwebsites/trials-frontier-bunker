<template>
  <select
    style="background-image: none; font-size: 0;"
    :class="playerStrengthColor"
    class="absolute top-0 bottom-0 right-0 left-auto w-5 p-0 border-none"
    v-model="strength"
    @change="$emit('changeStrength', playerId, strength)"
  >
    <option v-for="index in 4" :key="index" :value="index">
      {{ index }}
    </option>
  </select>
</template>
<script setup>
const props = defineProps(["strength"]);

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
