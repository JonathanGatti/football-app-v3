import React, { useState } from 'react';
import GoogleAuth from '../components/GoogleAuth';
import { Team } from '../interfaces';
import { connect } from 'react-redux';
import { defaultTeam } from '../utils/defaultTeam';
import { useForceUpdate } from '../utils/forceComponentUpdate';
import { createTeam } from '../actions';
import { CreateTeamProps } from '../interfaces';
import TeamForm from '../components/TeamForm';
import { Icon } from 'semantic-ui-react';
import TeamPLayers from '../components/TeamPlayers';

function CreateTeam({ createTeam, auth }: CreateTeamProps) {
  const forceUpdate = useForceUpdate();
  const [team, setTeam] = useState(defaultTeam);

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    setTeam({ ...team, teamModule: newModule });
    forceUpdate(e);
  };
  const handleNameChange = (e: any) => {
    setTeam({ ...team, teamName: e.target.value });
    forceUpdate(e);
  };

  const handleLogoChange = (e: any) => {
    setTeam({ ...team, logo: e.target.value });
    forceUpdate(e);
  };

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
          <TeamPLayers team={team} setTeam={setTeam} />
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
