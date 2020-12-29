import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerInfo from './PlayerInfo';
import { PlayerProps } from '../interfaces';
import shirt from '../assets/imgs/football_shirt1.png';

const PlayerCardDiv = styled.div`
  width: 110px;
  height: 100px;
  background-image: url(${shirt});
  background-size: 80%;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
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
      <h5>{player.player_name}</h5>
      {open ? <PlayerInfo player={player} /> : null}
    </PlayerCardDiv>
  );
}

export default PlayerCard;
