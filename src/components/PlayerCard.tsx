import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerInfo from './PlayerInfo';
import { PlayerProps } from '../interfaces';
import background from '../assets/imgs/player_card_background.png';

const PlayerCardDiv = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${background});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <p>{player.position}</p>
      {open ? <PlayerInfo player={player} /> : null}
    </PlayerCardDiv>
  );
}

export default PlayerCard;
