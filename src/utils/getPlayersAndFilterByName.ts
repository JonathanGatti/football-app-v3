import { getPlayers } from '../api/localApi';
import { getPlayer } from '../api/externalApi';

export const getPlayersAndFilterByName = async (name: string) => {
  let players;
  let  res = await getPlayers();
  if(players === undefined) {
     return players = await getPlayer(name);
  } else {
    players = res.filter((player: any) => {
      if (!player.player_name) {
        return null;
      } else {
        return player.player_name.toLowerCase().includes(name);
      }
    });
  }
  return players;
};