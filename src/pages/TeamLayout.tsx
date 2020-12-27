import React from 'react';
import { Team } from '../interfaces';
import pitch from '../assets/imgs/3dsection.png';
import styled from 'styled-components';
import PlayerCard from '../components/PlayerCard';

const Grid = styled.div`
  width: 70%;
  height: 70vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const PlayerDiv = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
`;

function TeamLayout({ team }: any) {
  const renderTeam = () => {
    if (!team) {
      return null;
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
