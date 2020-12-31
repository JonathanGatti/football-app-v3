import React from 'react';
import { Grid, PlayerDiv } from '../styles/styledComponents';
import SearchPlayerForm from '../components/SearchPlayerForm';
import PlayerCard from '../components/PlayerCard';
import { Icon } from 'semantic-ui-react';

function TeamPLayers({ team, setTeam }: any) {
  return (
    <>
      <Grid>
        <div className="ui centered grid">
          {team.teamModule.map((size: string, i: number) => (
            <div key={i} className={`${size} wide column`}>
              {team.teamPlayers[i]._id === 0 ? (
                <PlayerDiv>
                  <SearchPlayerForm team={team} setTeam={setTeam} index={i} />
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

export default TeamPLayers;
