import React, { useState } from 'react';
import { postPlayer } from '../api/localApi';
import { Player } from '../interfaces';
import SearchResultList from './SearchResultList';
import { getPlayersAndFilterByName } from '../utils/getPlayersAndFilterByName';
import { Header, Modal, List, Icon, Input } from 'semantic-ui-react';

interface SearchPlayerFormProps {
  team: Player[];
  rating: number;
  setTeam: Function;
  setRating: Function;
}

function SearchPlayerForm({
  team,
  setTeam,
  setRating,
  rating,
}: SearchPlayerFormProps) {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    setOpen(true);
    try {
      let res = await getPlayersAndFilterByName(name);
      setSearchResult(res);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const reset = () => {
    setName('');
  };
  const handleClick = async (player: Player) => {
    let newPlayer = await postPlayer(player);
    console.log(newPlayer);
    setTeam([...team, player]);
    setRating(rating + player.rating);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          reset();
        }}
      >
        <Input
          type="text"
          value={name}
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Header icon>List of Players</Header>
        <Modal.Content>
          {searchResult.length === 0 ? (
            <Icon loading name="spinner" />
          ) : (
            <List>
              {searchResult.map((player: Player) => (
                <SearchResultList
                  onClick={handleClick}
                  onOpen={setOpen}
                  player={player}
                />
              ))}
            </List>
          )}
        </Modal.Content>
      </Modal>
    </>
  );
}

export default SearchPlayerForm;
