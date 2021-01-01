import React from 'react';
import { Grid, PlayerDiv } from '../styles/styledComponents';
import SearchPlayerForm from '../components/SearchPlayerForm';
import PlayerCard from '../components/PlayerCard';
import { defaultTeam } from '../utils/defaultTeam';
import { Team } from '../interfaces';

interface TeamPlayersProps {
  team: Team;
  setTeam: Function;
}
function TeamPLayers({ team, setTeam }: TeamPlayersProps) {
  if (team.teamModule === undefined) {
    team = { ...defaultTeam };
  }
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
