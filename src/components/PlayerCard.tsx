import React, { useState } from 'react';
import PlayerInfo from './PlayerInfo';
import { PlayerProps } from '../interfaces';
import shirt from '../assets/imgs/football_shirt1.png';
import { PlayerCardContainer } from '../styles/styledComponents';

function PlayerCard({ player }: PlayerProps) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <PlayerCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={shirt} />
      <p>{player.player_name}</p>
      {open ? <PlayerInfo player={player} /> : null}
    </PlayerCardContainer>
  );
}

export default PlayerCard;
