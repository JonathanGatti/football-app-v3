import React from 'react';
import { Player } from '../interfaces';

interface PlayerProps {
  player: Player;
}

function PlayerCard({ player }: PlayerProps) {
  return (
    <div>
      <h5>{player.player_name}</h5>
      <p>{player.position}</p>
    </div>
  );
}

export default PlayerCard;
