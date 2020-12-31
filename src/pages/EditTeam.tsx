import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editTeam, fetchTeam } from '../actions';
function EditTeam({ match, fetchTeam, team, auth }: any) {
  useEffect(() => {
    fetchTeam(match.params.id);
  }, [auth.isSignedIn]);
  return <div>edit team</div>;
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { team: state.teams![ownProps.match.params.id], auth: state.auth };
};
export default connect(mapStateToProps, { editTeam, fetchTeam })(EditTeam);
