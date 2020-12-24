import React, { useState } from 'react';
import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';
import SearchPlayerForm from '../components/SearchPlayerForm';
import { classic, defensive, offensive } from '../utils/teamModules';
import PlayerCard from '../components/PlayerCard';
import { Player } from '../interfaces';

const Grid = styled.div`
  width: 80%;
  height: 80vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function CreateTeam() {
  const [module, setModule] = useState(defensive);
  const [team, setTeam] = useState<Player[]>([]);

  return (
    <div>
      <h1>Create Team</h1>
      <Grid>
        <div className="ui centered grid">
          {module.map((size, i) => (
            <div className={`${size} wide column`}>
              {!team[i] ? (
                <PlayerDiv key={i}>
                  <SearchPlayerForm team={team} setTeam={setTeam} />
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
    </div>
  );
}

export default CreateTeam;
