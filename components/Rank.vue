<template>
  <div class="flex items-center px-2 py-1 mr-2 text-sm rounded bg-amber-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 mr-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
        clip-rule="evenodd"
      />
    </svg>
    {{ rank }}
  </div>
</template>
<script setup>
const props = defineProps(["rank"])
</script>
