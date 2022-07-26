export function useFindPlayer(players, playerId) {
    return players.findIndex((index) => index.id == playerId);
}