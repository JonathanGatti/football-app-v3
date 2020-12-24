import React from 'react';
import { Player } from '../interfaces';
import { Button, Icon, List } from 'semantic-ui-react';

interface SearchResultListProps {
  player: Player;
  onClick: Function;
  onOpen: Function;
}

function SearchResultList({ player, onClick, onOpen }: SearchResultListProps) {
  return (
    <List.Item>
      <Icon name="user" />
      {player.player_name}
      <Button
        onClick={() => {
          onOpen(false);
          onClick(player);
        }}
      >
        Add To The Team
      </Button>
    </List.Item>
  );
}

export default SearchResultList;
