import React, { useState } from 'react';
import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';
import PlayerCard from '../components/PlayerCard';
import { Player } from '../interfaces';
import { Label, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { defaultTeam } from '../utils/defaultTeam';
import { createTeam } from '../actions';

const Container = styled.div`
  display: flex;
  justify-content: center;
  .team-name {
    width: 100%;
  }
`;

const Header = styled.div`
  background-color: #17135d;
  color: white;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 60vh;
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-top: auto;
  }
  .input {
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Grid = styled.div`
  width: 70%;
  height: 90vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface CreateTeamProps {
  createTeam: Function;
  auth: { userId: string; isSigendIn: boolean };
}

function CreateTeam({ createTeam, auth }: CreateTeamProps) {
  const [module, setModule] = useState<string[]>(defensive);
  const [teamName, setTeamName] = useState('');
  const [team, setTeam] = useState<Player[]>(defaultTeam);
  const [logo, setLogo] = useState('');
  const [rating, setRating] = useState(0);

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    setModule(newModule);
  };
  const handleNameChange = (e: any) => {
    setTeamName(e.target.value);
  };

  const handleLogoChange = (e: any) => {
    console.log(e.target.value);
    setLogo(e.target.value);
  };

  const handleClick = () => {
    const data = {
      teamName: teamName.toUpperCase(),
      teamPlayers: team,
      teamModule: module,
      userId: auth.userId,
      logo: logo,
      rating: rating,
    };
    createTeam(data);
  };
  return (
    <Container>
      <Header>
        <div className="team-name">
          <h2>Your Team Name: {teamName}</h2>
        </div>
        <Form>
          <Form.Field>
            <Label className="input">
              Choose a Name
              <input placeholder="Name Your team" onChange={handleNameChange} />
            </Label>
            <Label className="input">
              Choose a Logo
              <input
                placeholder="Insert an Image url"
                onChange={handleLogoChange}
              />
            </Label>
          </Form.Field>
        </Form>

        <Label className="input" l>
          Select Your Module
          <select
            value={module}
            className="ui dropdown "
            onChange={handleSelectChange}
          >
            <option value={defensive}>defensive 5-3-2</option>
            <option value={classic}>classic 4-4-2</option>
            <option value={offensive}>offensive 4-3-3</option>
          </select>
        </Label>
        <Label className="input">
          <p>
            Your Team Rating: <span>{rating}</span>
          </p>
          <img src={logo} />
        </Label>
        <Button className="submit-btn" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Header>
      <Grid>
        <div className="ui centered grid">
          {module.map((size, i) => (
            <div className={`${size} wide column`}>
              {!team[i]._id ? (
                <PlayerDiv key={i}>
                  <SearchPlayerForm
                    team={team}
                    rating={rating}
                    setRating={setRating}
                    setTeam={setTeam}
                    index={i}
                  />
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
    </Container>
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
