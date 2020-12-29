import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editTeam } from '../actions';
import { PlayerInfoProps, PlayerProps } from '../interfaces';
import background from '../assets/imgs/player_card_background.png';
import { Button } from 'semantic-ui-react';
import SearchPlayerForm from './SearchPlayerForm';
import { defaultTeam } from '../utils/defaultTeam';

const PlayerInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 30vw;
  height: 34vh;
  z-index: 10;
  position: absolute;
  background-image: url(${background});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  div {
    max-width: 40%;
    margin-top: 2rem;
  }
  p {
    font-size: 18px;
  }
`;

const PlayerInfo = ({ player }: PlayerProps) => {
  return (
    <PlayerInfoDiv>
      <div>
        <h3>{player.player_name}</h3>
        <p>{player.position}</p>
        <p>Country: {player.birth_country}</p>
        <p>Rating: {player.rating}</p>
      </div>
    </PlayerInfoDiv>
  );
};

export default PlayerInfo;
