import React, { useState } from 'react';
import { getPlayer } from '../api/externalApi';
import { Player } from '../interfaces';
import SearchResultList from './SearchResultList';
import { Header, Modal, List, Icon } from 'semantic-ui-react';

interface SearchPlayerFormProps {
  team: Player[];
  setTeam: Function;
}

function SearchPlayerForm({ team, setTeam }: SearchPlayerFormProps) {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = async () => {
    const res = await getPlayer(name);
    setSearchResult(res);
    setOpen(true);
    setSpinner(true);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const reset = () => {
    setName('');
  };
  const handleClick = (player: Player) => {
    setTeam([...team, player]);
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
        <div className="ui icon input loading">
          <input
            type="text"
            value={name}
            placeholder="Search..."
            onChange={handleChange}
          />
          {spinner && open ? <Icon loading name="spinner" /> : ''}
        </div>
      </form>
      {searchResult === undefined ? (
        <div>name not found</div>
      ) : (
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
        >
          <Header icon>List of Players</Header>
          <Modal.Content>
            <List>
              {searchResult.map((player: Player) => (
                <SearchResultList
                  onClick={handleClick}
                  onOpen={setOpen}
                  player={player}
                />
              ))}
            </List>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
}

export default SearchPlayerForm;
