import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import { Icon, Button, Modal, Header } from 'semantic-ui-react';
import { Team } from '../interfaces';
import TeamsList from './TeamsList';
import { defaultTeam } from '../utils/defaultTeam';
import TeamLayout from '../components/TeamLayout';

const Container = styled.div`
  display: flex;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .modal {
    margin: auto;
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
  const [winningTeam, setWinningTeam] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, [team1, team2]);

  const handleFightBtn = () => {
    if (team1.rating !== 0 && team2.rating !== 0) {
      if (team1.rating > team2.rating) {
        setWinningTeam(team1.teamName);
      } else {
        setWinningTeam(team2.teamName);
      }
      setOpen(true);
    }
  };

  const handleResetBtn = () => {
    setTeam2(defaultTeam);
    setTeam1(defaultTeam);
    setWinningTeam('');
  };

  const setTeams = (team: Team) => {
    if (team1.teamName === '') {
      setTeam1(team);
    } else {
      setTeam2(team);
    }
  };
  const render = () => {
    if (!teams) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Container>
          <Modal open={open} basic>
            <Modal.Content>The Winning Team is:</Modal.Content>
            <Header>{winningTeam}!</Header>
            <Button basic color="red" inverted onClick={() => setOpen(false)}>
              <Icon name="remove" />
            </Button>
          </Modal>
          <div className="list">
            <TeamsList addToFightBtn={renderAddToFightBtn} />
            <Button onClick={handleFightBtn}>Fight!</Button>
            <Button onClick={handleResetBtn}>Reset</Button>
          </div>
          <div className="content">
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

  const renderAddToFightBtn = (team: Team) => {
    if (team1.rating !== 0 && team2.rating !== 0) {
      return (
        <div>
          <Button disabled onClick={() => setTeams(team)}>
            Add Team
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={() => setTeams(team)}>Add Team</Button>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}

const mapStateToProps = (state: any) => {
  return { teams: state.teams, auth: state.auth };
};

export default connect(mapStateToProps, { fetchTeams })(TeamFight);
