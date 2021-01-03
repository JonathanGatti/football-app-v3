import React, { useEffect, useState } from 'react';
import { Team } from '../interfaces';
import TeamPlayers from '../components/TeamPlayers';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { editTeam, fetchTeam } from '../actions';
import TeamForm from '../components/TeamForm';
import { useForceUpdate } from '../hooks/forceComponentUpdate';
import { TeamContainer } from '../styles/styledComponents';

interface EditTeamProps {
  fetchTeam: Function;
  editTeam: Function;
  auth: { isSignedIn: boolean; userId: string | undefined };
  onClick?: () => void;
  team: Team;
  match: any;
}

function EditTeam({ match, fetchTeam, team, editTeam, auth }: EditTeamProps) {
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
    editTeam(newTeam, team._id!);
  };

  const render = () => {
    if (!team) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <TeamContainer>
          <TeamForm
            onSelectChange={handleSelectChange}
            onNameChange={handleNameChange}
            onLogoChange={handleLogoChange}
            onClick={handleSubmit}
            team={newTeam}
          />
          <TeamPlayers team={newTeam} setTeam={setNewTeam} />
        </TeamContainer>
      );
    }
  };
  return <>{render()}</>;
}

interface mapStateToProps {
  state: any;
  ownProps: any;
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { editTeam, fetchTeam })(EditTeam);
