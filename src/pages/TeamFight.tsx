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
    width: 25%;
    height: 100vh;
    .reset-btn {
      margin-left: 1em;
    }
  }
  .pitch {
    display: flex;
    width: 80%;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
  }, [team1, team2]);

  const render = () => {
    if (!teams) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Container>
          <div className="list">
            <TeamsList addToFightBtn={renderAddToFightBtn} />
            <Button className="reset-btn" onClick={resetTeams}>
              Reset
            </Button>
          </div>
          <div className="pitch">
            <div className="team">
              <TeamLayout team={team1} />
            </div>
            <div className="team">
              <TeamLayout team={team2} />
            </div>
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
  };

  const renderAddToFightBtn = (team: Team) => {
    return (
      <div>
        <Button onClick={() => setTeams(team)}>Add Team</Button>
      </div>
    );
  };

  return <div>{render()}</div>;
}

const mapStateToProps = (state: any) => {
  return { teams: state.teams, auth: state.auth };
};

export default connect(mapStateToProps, { fetchTeams })(TeamFight);
