import React, { useEffect, useState } from 'react';
import { getPlayer } from '../api/externalApi';

function CreateTeam() {
  const [name, setName] = useState('');
  // useEffect(() => {
  //   async function getPlayerInEffect() {
  //     const res = await getPlayer('');
  //     console.log(res);
  //   }
  //   getPlayerInEffect();
  // }, []);

  const handleSubmit = (e: any) => {
    e.stopPropagation();
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>Create Team</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" />
      </form>
    </div>
  );
}

export default CreateTeam;
