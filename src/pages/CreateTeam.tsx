import React, { useState } from 'react';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';

function CreateTeam() {
  const [module, setModule] = useState(offensive);

  return (
    <div>
      <h1>Create Team</h1>
      <div>
        <div className="ui centered grid">
          {module.map((size) => (
            <div className={`${size} wide column`}>
              <SearchPlayerForm />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
