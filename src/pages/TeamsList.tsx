import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';

function TeamsList({ fetchTeams }: any) {
  useEffect(() => {
    fetchTeams();
  }, []);

  return <div>Teams List</div>;
}

export default connect(null, { fetchTeams })(TeamsList);
