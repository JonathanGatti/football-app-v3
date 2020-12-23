import React, { useEffect } from 'react';
import { getPlayer } from '../api/externalApi';

function CreateTeam() {
  useEffect(() => {
    async function getPlayerInEffect() {
      const res = await getPlayer('cristiano ronaldo');
      console.log(res);
    }
    getPlayerInEffect();
  }, []);
  return <div>CreateTeam</div>;
}

export default CreateTeam;
