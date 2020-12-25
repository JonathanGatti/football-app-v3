import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../actions';
import { getPlayer } from '../api/externalApi';
import axios from 'axios';

interface ShowTeam {
  match: any;
  fetchTeam: Function;
  team: any;
  auth: { isSignedIn: boolean; userId: string };
}

function ShowTeam({ match, fetchTeam, team, auth }: ShowTeam) {
  const [player, setPlayer] = useState({});
  useEffect(() => {
    fetchTeam(match.params.id);
    async function get() {
      const res = await getPlayer('buffon');
      setPlayer(res[0]);
      console.log(player);
      axios
        .post('http://127.0.0.1:8080/api/players', player, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .catch((e) => {
          console.log(e);
        });
    }
    get();
  }, [auth.isSignedIn]);

  const renderTeam = () => {
    if (!team) {
      return null;
    } else {
      return <div>{team.teamName}</div>;
    }
  };
  return <div>{renderTeam()}</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeam })(ShowTeam);
