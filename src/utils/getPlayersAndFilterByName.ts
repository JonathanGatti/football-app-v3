import { getPlayers } from '../api/localApi';
import { getPlayer } from '../api/externalApi';

export const getPlayersAndFilterByName = async (name: string) => {
  let  res = await getPlayers();
    let players = res.filter((player: any) => {
      if (!player.player_name) {
        return  null;
      } else {
         return player.player_name.toLowerCase().includes(name);
      }
    });
    if(players.length <= 0){
      return players = await getPlayer(name)
    }
  return players;
};