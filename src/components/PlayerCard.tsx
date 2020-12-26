import React from 'react';
import styled from 'styled-components';
import { Player } from '../interfaces';
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

interface PlayerProps {
  player: Player;
}

function PlayerCard({ player }: PlayerProps) {
  return (
    <>
      <PlayerCardDiv>
        <h5>{player.player_name}</h5>
        <p>{player.position}</p>
      </PlayerCardDiv>
    </>
  );
}

export default PlayerCard;
