import React, { useState } from 'react';
import { postPlayer } from '../api/localApi';
import { Player } from '../interfaces';
import SearchResultList from './SearchResultList';
import { getPlayersAndFilterByName } from '../utils/getPlayersAndFilterByName';
import { Header, Modal, List, Icon, Input, Divider } from 'semantic-ui-react';
import { SearchPlayerFormProps } from '../interfaces';

function SearchPlayerForm({ team, setTeam, index }: SearchPlayerFormProps) {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    setOpen(true);
    try {
      let res = await getPlayersAndFilterByName(name);
      setSearchResult(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: any) => setName(e.target.value);

  const reset = () => setName('');

  const handleClick = async (player: Player, i: number) => {
    let newPlayer = await postPlayer(player);
    const newTeamPlayers = [...team.teamPlayers];
    newTeamPlayers[i] = newPlayer;
    const newTeam = { ...team, teamPlayers: newTeamPlayers };
    if (newPlayer.rating !== null) {
      let newRating = newTeam.rating + Math.floor(parseInt(newPlayer.rating));
      setTeam({ ...newTeam, rating: newRating });
    } else {
      setTeam({ ...newTeam });
    }
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
        onClose={() => {
          setOpen(false);
          setSearchResult([]);
        }}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Header icon>List of Players</Header>
        <Modal.Content>
          {searchResult === undefined ? (
            <div>player not found</div>
          ) : (
            <List>
              {searchResult.length === 0 ? (
                <Icon loading name="spinner" />
              ) : (
                searchResult.map((player: Player) => (
                  <>
                    <SearchResultList
                      key={player.player_id}
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
