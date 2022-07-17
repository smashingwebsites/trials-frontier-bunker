<template>
  <div class="grid max-w-md gap-4 p-4 mx-auto mt-4">
    <div :class="{ 'bg-gray-200 py-4 px-2 shadow-xl rounded-lg': newPlayer }">
      <input
        v-model="searchPlayer"
        type="text"
        placeholder="Suche"
        class="w-full rounded-lg"
      />
    </div>
    <div
      class="p-4 bg-gray-200 rounded-lg shadow-lg"
      v-for="player in searchResultList"
      :key="player.id"
    >
      <div class="flex items-center justify-between">
        <h1 class="mr-auto text-lg">{{ player.name }}</h1>
        <Battles :battles="player.battles" v-if="player.battles" />
        <Rank :rank="player.rank" v-if="player.rank" />
        <Strength :strength="player.tag" v-if="player.tag" />
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()

const searchPlayer = ref("")

const { data: players } = await useAsyncData("players", async () => {
  const { data } = await client
    .from("players")
    .select("id, name, tag, rank, notes, battles, created_at")

  return data
})

const searchResultList = computed(() => {
  let searchString = searchPlayer.value.toLowerCase()

  return players.value.filter(
    (player) => player.name.toLowerCase().indexOf(searchString) !== -1
  )
})

const newPlayer = computed(() => {
  if (searchPlayer.value != null && searchResultList.value.length > 0)
    return false

  return true
})
</script>
