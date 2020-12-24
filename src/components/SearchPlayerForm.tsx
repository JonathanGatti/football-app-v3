import React, { useState } from 'react';
import { getPlayer } from '../api/externalApi';
import { Player } from '../interfaces';

function SearchPlayerForm({ team, setTeam }: any) {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async (e: any) => {
    const res = await getPlayer(name);
    console.log(res);
    setSearchResult(res);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = (player: Player) => {
    setTeam([...team, player]);
    console.log(team);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setName('');
        }}
      >
        <input type="text" onChange={handleChange} />
      </form>
      <ul>
        {searchResult === undefined ? (
          <div>name not found</div>
        ) : (
          searchResult.map((player: Player) => (
            <div onClick={() => handleClick(player)}>
              <li key={player.player_id}>{player.player_name}</li>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchPlayerForm;
