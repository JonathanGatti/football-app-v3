import React from 'react';
import styled from 'styled-components';
import { Player } from '../interfaces';
import { Button, Icon, List } from 'semantic-ui-react';

interface SearchResultListProps {
  player: Player;
  onClick: Function;
  onOpen: Function;
}

const ListDiv = styled.div`
  display: flex;
  width: 50vw;
`;
function SearchResultList({ player, onClick, onOpen }: SearchResultListProps) {
  return (
    <ListDiv>
      <List.Item
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Icon name="user" />
          {player.player_name}
        </div>
        <Button
          size="small"
          onClick={() => {
            onOpen(false);
            onClick(player);
          }}
        >
          Add To The Team
        </Button>
      </List.Item>
    </ListDiv>
  );
}

export default SearchResultList;
