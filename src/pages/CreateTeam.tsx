import React, { useState } from 'react';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';
import { Player } from '../interfaces';

function CreateTeam() {
  const [module, setModule] = useState(offensive);
  const [team, setTeam] = useState<Player[]>([]);

  return (
    <div>
      <h1>Create Team</h1>
      <div>
        <div className="ui centered grid">
          {module.map((size, i) => (
            <div className={`${size} wide column`}>
              {!team[i] ? (
                <SearchPlayerForm team={team} setTeam={setTeam} />
              ) : (
                <div>{team[i].player_name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
