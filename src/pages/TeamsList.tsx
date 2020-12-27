import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Team } from '../interfaces';
import { fetchTeams, deleteTeam } from '../actions';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { TeamsListProps } from '../interfaces';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-top: 5em;
`;

function TeamsList({ teams, auth, fetchTeams, deleteTeam }: TeamsListProps) {
  useEffect(() => {
    fetchTeams();
  }, [auth.isSignedIn]);

  const handleClick = (id: string) => {
    deleteTeam(id);
    window.location.reload();
  };
  const renderTeams = () => {
    if (!teams.teams) {
      return null;
    } else {
      return (
        <Container>
          <Card.Group>
            {teams.teams.map((team: Team) => (
              <Card>
                <Card.Content>
                  <Image floated="right" size="mini" src={team.logo} />
                  <Card.Header>{team.teamName}</Card.Header>
                  <Card.Meta>Rating : {team.rating}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Link to={`/team/${team._id}`}>
                      <Button basic color="green">
                        Go To Team
                      </Button>
                    </Link>
                    <Button
                      basic
                      color="red"
                      onClick={() => handleClick(team._id!)}
                    >
                      DELETE
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Container>
      );
    }
  };

  return <div>{renderTeams()}</div>;
}

interface StateToProps {
  teams: Team[];
  auth: { isSignedIn: boolean; userId: string };
}

const mapStateToProps = (state: StateToProps) => {
  return { teams: state.teams, auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamsList);
