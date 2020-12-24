import React from 'react';
import { Player } from '../interfaces';

interface SearchResultListProps {
  player: Player;
  onClick: Function;
}

function SearchResultList({ player, onClick }: SearchResultListProps) {
  return (
    <div className="ui list">
      <div
        key={player.player_id}
        className="item"
        onClick={() => onClick(player)}
      >
        <div className="content">
          <div className="header">{player.player_name}</div>
          <div className="description">{player.position}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultList;
