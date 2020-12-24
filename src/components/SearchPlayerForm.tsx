import React, { useState } from 'react';
import { getPlayer } from '../api/externalApi';
import { Player } from '../interfaces';

interface SearchPlayerFormProps {
  team: Player[];
  setTeam: Function;
}

function SearchPlayerForm({ team, setTeam }: SearchPlayerFormProps) {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async () => {
    const res = await getPlayer(name);
    setSearchResult(res);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const reset = () => {
    setName('');
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
          handleSubmit();
          reset();
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
