import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTeam, deleteTeam } from '../actions';
import { ShowTeamProps } from '../interfaces';
import { Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TeamLayout from '../components/TeamLayout';
import { TeamStats } from '../styles/styledComponents';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function ShowTeam({ match, fetchTeam, deleteTeam, team, auth }: ShowTeamProps) {
  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);

  const handleClick = (id: string) => {
    deleteTeam(id);
  };

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
              <div>
                <Button
                  className="btn"
                  basic
                  color="blue"
                  as={Link}
                  to={`/edit/${team._id}`}
                >
                  Edit
                </Button>
                <Button
                  className="btn"
                  basic
                  color="red"
                  onClick={(e) => handleClick(team._id!)}
                >
                  DELETE
                </Button>
              </div>
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
export default connect(mapStateToProps, { fetchTeam, deleteTeam })(ShowTeam);
