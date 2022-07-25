<template>
  <div class="relative rounded bg-amber-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 absolute left-2 top-1.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
        clip-rule="evenodd"
      />
    </svg>

    <select
      style="background-image: none"
      class="relative py-1 pr-2 text-sm text-center bg-transparent border-none rounded outline-none pl-7"
      v-model="rank"
      @change="$emit('changeRank', playerId, rank)"
    >
      <option v-for="index in 20" :key="index" :value="index">
        {{ index }}
      </option>
    </select>
  </div>
</template>
<script setup>
const props = defineProps(["rank", "playerId"])
</script>
