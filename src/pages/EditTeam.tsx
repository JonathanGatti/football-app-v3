import React, { useEffect, useState } from 'react';
import { useTeam } from '../hooks/useTeam';
import { Team } from '../interfaces';
import { Grid, PlayerDiv } from '../styles/styledComponents';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard';
import { Icon } from 'semantic-ui-react';
import { editTeam, fetchTeam } from '../actions';
import TeamForm from '../components/TeamForm';
import { useForceUpdate } from '../utils/forceComponentUpdate';
import { defaultTeam } from '../utils/defaultTeam';

interface TeamFormProps {
  onSelectChange: (e: any) => void;
  onNameChange: (e: any) => void;
  onLogoChange: (e: any) => void;
  onClick: () => void;
  team: Team;
}

function EditTeam({ match, fetchTeam, team, editTeam, auth }: any) {
  const forceUpdate = useForceUpdate();
  const [newTeam, setNewTeam] = useState({ ...team });

  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const handleSelectChange = (e: any) => {
    const newModule = e.target.value.split(',');
    setNewTeam({ ...newTeam, teamModule: newModule });
    forceUpdate(e);
  };
  const handleNameChange = (e: any) => {
    setNewTeam({ ...newTeam, teamName: e.target.value });
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
          <Grid>
            <div className="ui centered grid">
              {newTeam.teamModule.map((size: string, i: number) => (
                <div key={i} className={`${size} wide column`}>
                  {newTeam.teamPlayers[i]._id === 0 ? (
                    <PlayerDiv>
                      <SearchPlayerForm
                        team={newTeam}
                        setTeam={setNewTeam}
                        index={i}
                      />
                    </PlayerDiv>
                  ) : (
                    <PlayerDiv key={i}>
                      <PlayerCard player={newTeam.teamPlayers[i]} />
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
const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { editTeam, fetchTeam })(EditTeam);
