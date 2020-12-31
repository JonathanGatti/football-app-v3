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
  }
  .list {
    width: 65%;
    max-height: 70vh;
    overflow: scroll;
  }
  .btns {
    align-self: flex-end;
  }
`;

interface TeamFightProps {
  teams: any;
  fetchTeams: () => void;
}

function TeamFight({ teams, fetchTeams }: TeamFightProps) {
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
        <>
          <Container>
            <Modal open={open} basic size="small">
              <Modal.Content>
                <p>
                  {team1.teamName} score is: {team1.rating}
                </p>
                <p>
                  {team2.teamName} score is: {team2.rating}
                </p>
              </Modal.Content>
              <Header>The Winnning Team is: {winningTeam}!</Header>
              <Modal.Actions>
                <Button
                  basic
                  color="red"
                  inverted
                  onClick={() => setOpen(false)}
                >
                  <Icon name="remove" />
                  Close
                </Button>
              </Modal.Actions>
            </Modal>
            <div className="list">
              <TeamsList addToFightBtn={renderAddToFightBtn} />
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
          <div className="btns">
            <Button onClick={handleFightBtn}>Fight!</Button>
            <Button onClick={handleResetBtn}>Reset</Button>
          </div>
        </>
      );
    }
  };

  const renderAddToFightBtn = (team: Team) => {
    let disabled = false;
    if (team1.rating !== 0 && team2.rating !== 0) {
      disabled = true;
    } else {
      disabled = false;
    }
    return (
      <div>
        <Button disabled={disabled} onClick={() => setTeams(team)}>
          Add Team
        </Button>
      </div>
    );
  };

  return <div>{render()}</div>;
}

const mapStateToProps = (state: any) => {
  return { teams: state.teams };
};

export default connect(mapStateToProps, { fetchTeams })(TeamFight);
