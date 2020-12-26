import { getPlayers } from '../api/localApi';
import { getPlayer } from '../api/externalApi';
import {Player } from '../interfaces';

export const getPlayersAndFilterByName = async (name: string) => {
  let  res = await getPlayers();
    let players = res.filter((player: Player) => {
      if (!player.player_name) {
        return  null;
      } else {
         return player.player_name.toLowerCase().includes(name);
      }
    });
    if(players.length <= 3){
      return players = await getPlayer(name)
    }
  return players;
};