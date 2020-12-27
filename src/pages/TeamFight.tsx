import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import { Icon, Button } from 'semantic-ui-react';
import { Team } from '../interfaces';
import TeamsList from './TeamsList';
import { defaultTeam } from '../utils/defaultTeam';
import TeamLayout from './TeamLayout';

const Container = styled.div`
  display: flex;
  .list {
    background-color: lightcoral;
    width: 20%;
    height: 100vh;
  }
  .pitch {
    width: 80%;
    height: 100vh;
    background-color: lightblue;
  }
`;

interface TeamFightProps {
  teams: any;
  auth: { isSigendIn: boolean; userId: string };
  fetchTeams: () => void;
}

function TeamFight({ teams, auth, fetchTeams }: TeamFightProps) {
  const [team1, setTeam1] = useState(defaultTeam);
  const [team2, setTeam2] = useState(defaultTeam);

  useEffect(() => {
    fetchTeams();
    console.log('from useEffect team1' + team1.teamName);
    console.log('from useEffect team2' + team2.teamName);
  }, [team1, team2]);

  const render = () => {
    if (!teams) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Container>
          <div className="list">
            <TeamsList addToFightBtn={renderAddToFightBtn} />
          </div>
          <div className="pitch">
            <TeamLayout team={team1} />
            <TeamLayout team={team2} />
          </div>
        </Container>
      );
    }
  };

  const resetTeams = () => {
    setTeam2(defaultTeam);
    setTeam1(defaultTeam);
  };

  const setTeams = (team: Team) => {
    if (team1.teamName === '') {
      setTeam1(team);
    } else {
      setTeam2(team);
    }
    console.log('from the function team1 ' + team1.teamName);
    console.log('from the function team2 ' + team2.teamName);
  };

  const renderAddToFightBtn = (team: Team) => {
    return (
      <div>
        <Button onClick={() => setTeams(team)}>Add Team</Button>
      </div>
    );
  };

  return (
    <div>
      {render()}
      <Button onClick={resetTeams}>Reset</Button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { teams: state.teams, auth: state.auth };
};

export default connect(mapStateToProps, { fetchTeams })(TeamFight);
