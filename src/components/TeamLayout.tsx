import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Team } from '../interfaces';
import PlayerCard from './PlayerCard';
import { Grid, PlayerDiv } from '../styles/styledComponents';

function TeamLayout({ team }: any) {
  const renderTeam = () => {
    if (!team) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Grid>
          <div className="ui centered grid">
            {team.teamModule.map((size: string, i: number) => (
              <div className={`${size} wide column`}>
                <PlayerDiv key={i}>
                  <PlayerCard player={team.teamPlayers[i]} />
                </PlayerDiv>
              </div>
            ))}
          </div>
        </Grid>
      );
    }
  };

  return <>{renderTeam()}</>;
}

export default TeamLayout;
