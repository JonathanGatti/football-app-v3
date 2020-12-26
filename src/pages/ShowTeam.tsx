import React, { useEffect } from 'react';
import styled from 'styled-components';
import PlayerCard from '../components/PlayerCard';

import pitch from '../assets/imgs/3dsection.png';
import { connect } from 'react-redux';
import { fetchTeam } from '../actions';

const Grid = styled.div`
  width: 70%;
  height: 80vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface ShowTeam {
  match: any;
  fetchTeam: Function;
  team: any;
  auth: { isSignedIn: boolean; userId: string };
}

function ShowTeam({ match, fetchTeam, team, auth }: ShowTeam) {
  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const renderTeam = () => {
    if (!team) {
      return null;
    } else {
      console.log(team);
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
  return <div>{renderTeam()}</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeam })(ShowTeam);
