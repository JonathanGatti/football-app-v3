import React from 'react';
import { PlayerInfoContainer } from '../styles/styledComponents';
import { PlayerProps } from '../interfaces';
import { Card, Button } from 'semantic-ui-react';

const PlayerInfo = ({ player }: PlayerProps) => {
  return (
    <PlayerInfoContainer>
      <Card>
        <Card.Content>
          <Card.Header>{player.player_name}</Card.Header>
          <Card.Meta>{player.position}</Card.Meta>
          <Card.Meta>Country: {player.birth_country}</Card.Meta>
          <Card.Meta>Rating: {player.rating}</Card.Meta>
        </Card.Content>
        {/* <Card.Content extra>
          <Button basic color="green">
            Edit
          </Button>
        </Card.Content> */}
      </Card>
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;
