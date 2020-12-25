import React, { useEffect } from 'react';
import { getData } from '../api/localApi';

function TeamsList() {
  useEffect(() => {
    const getDataInEffect = async () => {
      const res = await getData();
      console.log(res);
    };
    getDataInEffect();
  });

  return <div>Teams List</div>;
}

export default TeamsList;
