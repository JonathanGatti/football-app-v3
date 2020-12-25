import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

function TeamsList({ teams, auth, fetchTeams }: any) {
  useEffect(() => {
    fetchTeams();
  }, [auth.isSignedIn]);

  const renderTeams = () => {
    if (!teams.teams) {
      return null;
    } else {
      return (
        <div>
          {teams.teams.map((team: any) => (
            <Link to={`/team/${team._id}`}>{team.teamName}</Link>
          ))}
        </div>
      );
    }
  };

  return <div>{renderTeams()}</div>;
}

const mapStateToProps = (state: any) => {
  return { teams: state.teams, auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeams })(TeamsList);
