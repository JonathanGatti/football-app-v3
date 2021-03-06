import React from 'react';
import { PlayerInfoContainer } from '../styles/styledComponents';
import { PlayerProps } from '../interfaces';
import { Card } from 'semantic-ui-react';

const PlayerInfo = ({ player }: PlayerProps) => {
  return (
    <PlayerInfoContainer>
      <Card>
        <Card.Content className="card">
          <Card.Header>{player.player_name}</Card.Header>
          <Card.Meta>{player.position}</Card.Meta>
          <Card.Meta>Country: {player.birth_country}</Card.Meta>
          <Card.Meta>Rating: {player.rating}</Card.Meta>
        </Card.Content>
      </Card>
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;
