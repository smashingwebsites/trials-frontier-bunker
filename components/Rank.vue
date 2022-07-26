<template>
  <div class="relative rounded bg-amber-400">

  <TrendingUpIcon class="w-4 h-4 absolute left-2 top-1.5"/>
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
import { TrendingUpIcon } from '@heroicons/vue/solid'
const props = defineProps(["rank", "playerId"])
</script>
