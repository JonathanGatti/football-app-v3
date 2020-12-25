import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Team } from '../interfaces';
import { fetchTeams, deleteTeam } from '../actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface TeamsList {
  teams: any;
  auth: { isSignedIn: boolean; userId: string };
  fetchTeams: Function;
  deleteTeam: Function;
}

function TeamsList({ teams, auth, fetchTeams, deleteTeam }: TeamsList) {
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

interface StateToProps {
  teams: Team[];
  auth: { isSignedIn: boolean; userId: string };
}

const mapStateToProps = (state: StateToProps) => {
  return { teams: state.teams, auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamsList);
