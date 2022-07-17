<template>
  <div
    :class="playerStrengthColor"
    class="px-2 py-1 text-sm text-white rounded"
  >
    {{ strength }}
  </div>
</template>
<script setup>
const props = defineProps(["strength"])

const playerStrengthColor = computed(() => {
  if (props.strength === 1) {
    return "bg-emerald-900"
  }
  if (props.strength === 2) {
    return "bg-sky-700"
  }

  if (props.strength === 3) {
    return "bg-violet-800"
  }

  return "bg-red-900"
})
</script>
