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
const props = defineProps(["strength", "playerId"]);

const playerStrengthColor = computed(() => {
  if (props.strength === 1) {
    return "bg-green-600";
  }
  if (props.strength === 2) {
    return "bg-sky-600";
  }

  if (props.strength === 3) {
    return "bg-fuchsia-700";
  }

  if (props.strength === 4) {
    return "bg-red-500";
  }

  return "bg-gray-300";
});
</script>
