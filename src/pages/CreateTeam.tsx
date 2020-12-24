import React, { useEffect, useState } from 'react';
import { getPlayer } from '../api/externalApi';
import { Player } from '../interfaces';

function CreateTeam() {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async (e: any) => {
    const res = await getPlayer(name);
    console.log(res);
    setSearchResult(res);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <div>
      <h1>Create Team</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input type="text" onChange={handleChange} />
      </form>
      <ul>
        {searchResult.map((player: Player) => (
          <li key={player.player_id}>{player.player_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CreateTeam;
