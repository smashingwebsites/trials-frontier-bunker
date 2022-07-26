<template>
  <div class="grid max-w-md gap-2 p-4 mx-auto mt-4">
    <div :class="{ 'bg-gray-200 py-2 px-2 shadow-xl rounded-lg': newPlayer }">
      <input
        v-model="searchPlayer"
        type="text"
        placeholder="Suche"
        class="w-full rounded-lg"
      />
      <div v-if="newPlayer" class="flex items-center justify-start gap-4 pt-3">
        <Battles
          :battles="newPlayerBattles"
          @add-battle="(id, nB) => (newPlayerBattles = nB)"
        />
        <Rank
          :rank="newPlayerRank"
          @change-rank="(id, nR) => (newPlayerRank = nR)"
        />
        <NewStrength
          :strength="newPlayerStrength"
          @change-strength="(id, nS) => (newPlayerStrength = nS)"
        />
        <button
          class="px-2 py-1 ml-auto text-sm text-white bg-green-600 rounded"
          @click="saveNewPlayer"
        >
          Speichern
        </button>
      </div>
      <div v-if="newPlayer" class="pt-3">
        <textarea
          v-model="newPlayerNotes"
          class="w-full rounded"
          placeholder="Notizen"
          rows="2"
        ></textarea>
      </div>
    </div>
    <div
      class="relative p-4 pr-8 overflow-hidden bg-gray-200 rounded-lg shadow-lg"
      v-for="player in searchResultList"
      :key="player.id"
    >
      <div class="flex items-center justify-between gap-2">
        <h1 class="mr-auto">{{ player.name }}</h1>
        <Battles
          v-if="player.battles"
          :battles="player.battles"
          :player-id="player.id"
          @add-battle="updateBattles"
        />
        <Rank
          :rank="player.rank"
          v-if="player.rank"
          :player-id="player.id"
          @change-rank="updateRank"
        />
        <Strength
          :strength="player.tag"
          :player-id="player.id"
          @change-strength="updateStrength"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFindPlayer } from "./composables/findPlayer"

const client = useSupabaseClient()
const searchPlayer = ref("")

const newPlayerBattles = ref(1)
const newPlayerRank = ref(0)
const newPlayerStrength = ref(0)
const newPlayerNotes = ref("")

const dummy = [
    {
        "id": 2342,
        "created_at": "2022-07-26T19:30:37.52291+00:00",
        "tag": 0,
        "name": "real user",
        "rank": 0,
        "notes": "",
        "battles": 1
    }
]


const { data: players } = await useAsyncData("players", async () => {
  const { data } = await client
    .from("players")
    .select("id, name, tag, rank, notes, battles, created_at")
    .order("id", { ascending: true })

  return data
})


async function saveNewPlayer() {
  const { data, error } = await client.from("players").insert({
    name: searchPlayer.value,
    tag: newPlayerStrength.value,
    rank: newPlayerRank.value,
    battles: newPlayerBattles.value,
    notes: newPlayerNotes.value,
  })

  if (data) {
    players.value.push(data[0])
    searchPlayer.value = "";
  } else console.log(error)
}

async function updateBattles(playerId, battleCount) {
  const { data, error } = await client
    .from("players")
    .update({ battles: battleCount })
    .match({ id: playerId })

  // if update success:
  if (data) {
    const playerArrIndex = useFindPlayer(players.value, playerId)

    // Change player Array
    players.value[playerArrIndex].battles = data[0].battles
  } else console.log(error)
}

async function updateRank(playerId, newRank) {
  const { data, error } = await client
    .from("players")
    .update({ rank: newRank })
    .match({ id: playerId })

  // if update success:
  if (data) {
    const playerArrIndex = useFindPlayer(players.value, playerId)
    // Change player Array
    players.value[playerArrIndex].rank = data[0].rank
  } else console.log(error)
}

async function updateStrength(playerId, newTag) {
  const { data, error } = await client
    .from("players")
    .update({ tag: newTag })
    .match({ id: playerId })

  // if update success:
  if (data) {
    const playerArrIndex = useFindPlayer(players.value, playerId)

    // Change player Array
    players.value[playerArrIndex].tag = data[0].tag
  } else console.log(error)
}
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
