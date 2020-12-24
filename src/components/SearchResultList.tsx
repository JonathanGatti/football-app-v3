import React, { useState } from 'react';
import { Player } from '../interfaces';
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react';

interface SearchResultListProps {
  player: Player;
  onClick: Function;
}

function SearchResultList({ player, onClick }: SearchResultListProps) {
  return (
    <List.Item onClick={() => onClick(player)}>{player.player_name}</List.Item>
  );
}

export default SearchResultList;
