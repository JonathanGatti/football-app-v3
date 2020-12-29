import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerInfo from './PlayerInfo';
import { PlayerProps } from '../interfaces';
import shirt from '../assets/imgs/football_shirt1.png';

const PlayerCardDiv = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 80px;
  }
`;

function PlayerCard({ player }: PlayerProps) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <PlayerCardDiv
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={shirt} />
      <p>{player.player_name}</p>
      {open ? <PlayerInfo player={player} /> : null}
    </PlayerCardDiv>
  );
}

export default PlayerCard;
