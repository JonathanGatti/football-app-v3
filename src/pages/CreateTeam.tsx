import React, { useState } from 'react';
import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';
import PlayerCard from '../components/PlayerCard';
import { Player } from '../interfaces';
import { Label, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createTeam } from '../actions';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 1rem;
  p {
    font-size: 18px;
    text-transform: uppercase;
  }
`;

const Grid = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function CreateTeam({ createTeam, auth }: any) {
  const [module, setModule] = useState<string[]>(defensive);
  const [teamName, setTeamName] = useState('');
  const [team, setTeam] = useState<Player[]>([]);

  const handleSubmit = () => {
    console.log(teamName);
  };

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    setModule(newModule);
  };
  const handleNameChange = (e: any) => {
    setTeamName(e.target.value);
  };

  const handleClick = () => {
    const data = {
      teamName: teamName,
      teamPlayers: team,
      teamModule: module,
      userId: auth.userId,
    };
    createTeam(data);
  };
  return (
    <div style={{ backgroundColor: '#17135d' }}>
      <h1>Create Your Team</h1>
      <Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Label>
              Choose a Name
              <input placeholder="Name Your team" onChange={handleNameChange} />
            </Label>
          </Form.Field>
        </Form>

        <p>{teamName}</p>
        <Label>
          Select Your Module
          <select
            value={module}
            className="ui dropdown"
            onChange={handleSelectChange}
          >
            <option value={defensive}>defensive 5-3-2</option>
            <option value={classic}>classic 4-4-2</option>
            <option value={offensive}>offensive 4-3-3</option>
          </select>
        </Label>
      </Header>
      <Grid>
        <div className="ui centered grid">
          {module.map((size, i) => (
            <div className={`${size} wide column`}>
              {!team[i] ? (
                <PlayerDiv key={i}>
                  <SearchPlayerForm team={team} setTeam={setTeam} />
                </PlayerDiv>
              ) : (
                <PlayerDiv key={i}>
                  <PlayerCard player={team[i]} />
                </PlayerDiv>
              )}
            </div>
          ))}
        </div>
      </Grid>
      <Button type="submit" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
}

interface StateToProps {
  auth: {
    isSigendIn: boolean;
    userId: string;
  };
}

const mapStateToProps = (state: StateToProps) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { createTeam })(CreateTeam);
