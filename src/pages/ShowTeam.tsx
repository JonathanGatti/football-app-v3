import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../actions';

function ShowTeam({ match, fetchTeam, team, auth }: any) {
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
