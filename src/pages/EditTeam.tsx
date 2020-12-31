import React, { useEffect, useState } from 'react';
import { Team } from '../interfaces';
import TeamPlayers from '../components/TeamPlayers';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { editTeam, fetchTeam } from '../actions';
import TeamForm from '../components/TeamForm';
import { useForceUpdate } from '../utils/forceComponentUpdate';

interface TeamFormProps {
  onSelectChange: (e: any) => void;
  onNameChange: (e: any) => void;
  onLogoChange: (e: any) => void;
  onClick: () => void;
  team: Team;
}

function EditTeam({ match, fetchTeam, team, editTeam, auth }: any) {
  const forceUpdate = useForceUpdate();
  const [newTeam, setNewTeam] = useState<Team>({ ...team });

  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    setNewTeam({ ...newTeam, teamModule: newModule });
    forceUpdate(e);
  };
  const handleNameChange = (e: any) => {
    setNewTeam({ ...newTeam, teamName: e.target.value.toUpperCase() });
  };

  const handleLogoChange = (e: any) => {
    setNewTeam({ ...newTeam, logo: e.target.value });
  };

  const handleSubmit = () => {
    editTeam(newTeam, team._id);
  };

  const render = () => {
    if (!team) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <>
          <TeamForm
            onSelectChange={handleSelectChange}
            onNameChange={handleNameChange}
            onLogoChange={handleLogoChange}
            onClick={handleSubmit}
            team={team}
          />
          <TeamPlayers team={newTeam} setTeam={setNewTeam} />
        </>
      );
    }
  };
  return <>{render()}</>;
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { editTeam, fetchTeam })(EditTeam);
