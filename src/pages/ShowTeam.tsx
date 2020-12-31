import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTeam } from '../actions';
import { ShowTeamProps } from '../interfaces';
import { Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TeamLayout from '../components/TeamLayout';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TeamStats = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  width: 25%;
  height: 70vh;
  border-radius: 20px;
  img {
    max-width: 60%;
    max-height: 60%;
  }
  .edit-btn {
    margin-top: auto;
  }
`;

function ShowTeam({ match, fetchTeam, team, auth }: ShowTeamProps) {
  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const renderTeam = () => {
    if (!team) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Container>
          <TeamStats>
            <h2>{team.teamName}</h2>
            <h5>Rating: {team.rating}</h5>
            <img src={team.logo} alt="logo" />
            {auth.userId === team.userId && (
              <Button
                color="blue"
                className="edit-btn"
                as={Link}
                to={`/edit/${team._id}`}
              >
                Edit
              </Button>
            )}
          </TeamStats>
          <TeamLayout team={team} />
        </Container>
      );
    }
  };
  return <div>{renderTeam()}</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeam })(ShowTeam);
