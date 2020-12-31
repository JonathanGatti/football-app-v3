import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Team } from '../interfaces';
import { fetchTeams, deleteTeam } from '../actions';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { TeamsListProps } from '../interfaces';

function TeamsList({
  teams,
  auth,
  fetchTeams,
  deleteTeam,
  addToFightBtn,
}: TeamsListProps) {
  useEffect(() => {
    fetchTeams();
  }, [teams.length]);

  const handleClick = (id: string) => {
    deleteTeam!(id);
    console.log(teams);
  };
  const renderTeams = () => {
    if (teams.length === 0) {
      return <Icon loading name="spinner" />;
    } else {
      return (
        <Card.Group>
          {teams.map((team: Team) => (
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src={team.logo} />
                <Card.Header>{team.teamName}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  {!addToFightBtn ? (
                    <>
                      <Link to={`/team/${team._id}`}>
                        <Button basic color="green">
                          Go To Team
                        </Button>
                      </Link>
                      {auth.userId === team.userId ? (
                        <Button
                          basic
                          color="red"
                          onClick={(e) => handleClick(team._id!)}
                        >
                          DELETE
                        </Button>
                      ) : null}
                    </>
                  ) : (
                    addToFightBtn!(team)
                  )}
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
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
  return { teams: Object.values(state.teams), auth: state.auth };
};
export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamsList);
