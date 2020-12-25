import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, deleteTeam } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function TeamsList({ teams, auth, fetchTeams, deleteTeam }: any) {
  useEffect(() => {
    fetchTeams();
  }, [auth.isSignedIn]);

  const handleClick = (id: string) => {
    deleteTeam(id);
  };
  const renderTeams = () => {
    if (!teams.teams) {
      return null;
    } else {
      return (
        <div>
          {teams.teams.map((team: any) => (
            <>
              <Link to={`/team/${team._id}`}>{team.teamName}</Link>
              <Button onClick={() => handleClick(team._id)}>DELETE</Button>
            </>
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
export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamsList);
