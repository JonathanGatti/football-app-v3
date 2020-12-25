import React from 'react';
import styled from 'styled-components';
import { Player } from '../interfaces';

const PlayerCardDiv = styled.div`
  width: 120px;
  height: 120px;
  background-color: gold;
  clip-path: polygon(
    50% 1%,
    100% 16%,
    93% 74%,
    56% 100%,
    44% 100%,
    5% 70%,
    0 15%
  );
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
    <PlayerCardDiv>
      <h5>{player.player_name}</h5>
      <p>{player.position}</p>
    </PlayerCardDiv>
  );
}

export default PlayerCard;
