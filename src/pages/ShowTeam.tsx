import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../api/localApi';
import { fetchTeam } from '../actions';

interface ShowTeam {
  match: any;
  fetchTeam: Function;
  team: any;
  auth: { isSignedIn: boolean; userId: string };
}

function ShowTeam({ match, fetchTeam, team, auth }: ShowTeam) {
  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const renderTeam = () => {
    if (!team) {
      return null;
    } else {
      return <div>{team.teamName}</div>;
    }
  };
  return <div>{renderTeam()}</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeam })(ShowTeam);
