import React, { useState } from 'react';
import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';
import PlayerCard from '../components/PlayerCard';
import { Player } from '../interfaces';
import { connect } from 'react-redux';
import { defaultTeam } from '../utils/defaultTeam';
import { createTeam } from '../actions';
import TeamForm from '../components/TeamForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  .team-name {
    width: 100%;
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
      <TeamForm
        onSelectChange={handleSelectChange}
        onNameChange={handleNameChange}
        onLogoChange={handleLogoChange}
        onClick={handleClick}
        teamName={teamName}
        logo={logo}
        rating={rating}
        module={module}
      />
      <Grid>
        <div className="ui centered grid">
          {module.map((size, i) => (
            <div className={`${size} wide column`}>
              {team[i]._id === 0 ? (
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
