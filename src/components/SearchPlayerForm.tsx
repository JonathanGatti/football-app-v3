import React, { useState } from 'react';
import { postPlayer } from '../api/localApi';
import { Team, Player } from '../interfaces';
import SearchResultList from './SearchResultList';
import { getPlayersAndFilterByName } from '../utils/getPlayersAndFilterByName';
import { Header, Modal, List, Icon, Input, Divider } from 'semantic-ui-react';
import { SearchPlayerFormProps } from '../interfaces';

function SearchPlayerForm({
  team,
  setTeam,
  setRating,
  index,
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

  const handleChange = (e: any) => setName(e.target.value);

  const reset = () => setName('');

  const handleClick = async (player: Player, i: number) => {
    let newPlayer = await postPlayer(player);
    team.teamPlayers[i] = newPlayer;
    if (newPlayer.rating !== null) {
      setRating(Math.floor(team.rating + parseInt(newPlayer.rating)));
    }
    setTeam({ ...team });
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
              {searchResult === undefined ? (
                <div>player not found</div>
              ) : (
                searchResult.map((player: Player) => (
                  <>
                    <SearchResultList
                      index={index}
                      onClick={handleClick}
                      onOpen={setOpen}
                      player={player}
                    />
                    <Divider />
                  </>
                ))
              )}
            </List>
          )}
        </Modal.Content>
      </Modal>
    </>
  );
}

export default SearchPlayerForm;
