import React, { useState } from 'react';
import { Grid, PlayerDiv } from '../styles/styledComponents';
import SearchPlayerForm from '../components/SearchPlayerForm';
import PlayerCard from '../components/PlayerCard';
import GoogleAuth from '../components/GoogleAuth';
import { Team } from '../interfaces';
import { connect } from 'react-redux';
import { defaultTeam } from '../utils/defaultTeam';
import { useForceUpdate } from '../utils/forceComponentUpdate';
import { createTeam } from '../actions';
import { CreateTeamProps } from '../interfaces';
import TeamForm from '../components/TeamForm';
import { Icon } from 'semantic-ui-react';

function CreateTeam({ createTeam, auth }: CreateTeamProps) {
  const forceUpdate = useForceUpdate();
  const [team, setTeam] = useState<Team>(defaultTeam);

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    team.teamModule = newModule;
    forceUpdate(e);
  };
  const handleNameChange = (e: any) => {
    team.teamName = e.target.value;
    forceUpdate(e);
  };

  const handleLogoChange = (e: any) => {
    team.logo = e.target.value;
    forceUpdate(e);
  };

  const setRating = (newRating: number) => (team.rating = newRating);

  const handleClick = () => {
    const data = {
      teamName: team.teamName.toUpperCase(),
      teamPlayers: team.teamPlayers,
      teamModule: team.teamModule,
      userId: auth.userId,
      logo: team.logo,
      rating: team.rating,
    };
    createTeam(data);
  };

  const render = () => {
    if (auth.isSignedIn === null) {
      return <Icon loading name="spinner" />;
    }
    if (!auth.isSignedIn) {
      return (
        <div style={{ margin: 'auto' }}>
          <p>You have to be logged in to create a team</p>
          <GoogleAuth />
        </div>
      );
    } else {
      return (
        <>
          <TeamForm
            onSelectChange={handleSelectChange}
            onNameChange={handleNameChange}
            onLogoChange={handleLogoChange}
            onClick={handleClick}
            team={team}
          />
          <Grid>
            <div className="ui centered grid">
              {team.teamModule.map((size, i) => (
                <div key={i} className={`${size} wide column`}>
                  {team.teamPlayers[i]._id === 0 ? (
                    <PlayerDiv>
                      <SearchPlayerForm
                        team={team}
                        setRating={setRating}
                        setTeam={setTeam}
                        index={i}
                      />
                    </PlayerDiv>
                  ) : (
                    <PlayerDiv key={i}>
                      <PlayerCard player={team.teamPlayers[i]} />
                    </PlayerDiv>
                  )}
                </div>
              ))}
            </div>
          </Grid>
        </>
      );
    }
  };
  return <>{render()}</>;
}

interface StateToProps {
  auth: {
    isSignedIn: boolean;
    userId: string;
  };
}

const mapStateToProps = (state: StateToProps) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { createTeam })(CreateTeam);
