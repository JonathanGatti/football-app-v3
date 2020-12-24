import React, { useState } from 'react';
import { getPlayer } from '../api/externalApi';
import { Player } from '../interfaces';
import SearchResultList from './SearchResultList';

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
        <div className="ui icon input loading">
          <input type="text" placeholder="Search..." onChange={handleChange} />
        </div>
      </form>
      {searchResult === undefined ? (
        <div>name not found</div>
      ) : (
        searchResult.map((player: Player) => (
          <SearchResultList player={player} onClick={handleClick} />
        ))
      )}
    </div>
  );
}

export default SearchPlayerForm;
