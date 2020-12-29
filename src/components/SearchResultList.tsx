import React from 'react';
import styled from 'styled-components';
import { Button, Icon, List } from 'semantic-ui-react';
import { SearchResultListProps } from '../interfaces';

const Container = styled.div`
  display: flex;
  width: 50vw;
`;

function SearchResultList({
  player,
  onClick,
  onOpen,
  index,
}: SearchResultListProps) {
  return (
    <Container>
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
            onClick(player, index);
          }}
        >
          Add To The Team
        </Button>
      </List.Item>
    </Container>
  );
}

export default SearchResultList;
