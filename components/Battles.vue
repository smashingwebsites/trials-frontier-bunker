<template>
  <button
    @click="$emit('addBattle', playerId, battles + 1)"
    class="flex items-center px-2 py-1 text-sm text-white bg-indigo-600 rounded cursor-pointer"
  >
    <EyeIcon class="w-4 h-4 mr-1"/>
    {{ battles }}
  </button>
</template>
<script setup>
import { EyeIcon } from '@heroicons/vue/solid'

const props = defineProps(["battles", "playerId"])
</script>