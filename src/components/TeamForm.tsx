import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Label, Form, Button, Input } from 'semantic-ui-react';
import { classic, defensive, offensive } from '../utils/teamModules';
import { Team } from '../interfaces';

const Container = styled.div`
  background-color: #17135d;
  color: white;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 65vh;
  padding-top: 2em;
  padding-bottom: 1em;
  border-radius: 15px;
  margin-top: 2em;
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.4em;
    width: 100px;
    height: 30px;
    margin-top: auto;
  }
  .label {
    max-width: 90%;
    margin-top: 0.6em;
    margin-left: 0.4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    max-height: 50%;
  }
`;

interface TeamFormProps {
  onSelectChange: (e: any) => void;
  onNameChange: (e: any) => void;
  onLogoChange: (e: any) => void;
  onClick: () => void;
  team: Team;
}

function TeamForm({
  onSelectChange,
  onNameChange,
  onLogoChange,
  onClick,
  team,
}: TeamFormProps) {
  return (
    <Container>
      <div className="team-name">
        <h3>Your Team Name: {team.teamName}</h3>
      </div>
      <Form>
        <Label className="label" style={{ marginLeft: '0.4em' }}>
          Choose a Name
          <Input placeholder="Name Your team" onChange={onNameChange} />
        </Label>
        <Label className="label">
          Choose a Logo
          <Input placeholder="Insert an Image url" onChange={onLogoChange} />
        </Label>
        <Label className="label" l>
          Select Your Module
          <select
            value={team.teamModule}
            className="ui dropdown "
            onChange={onSelectChange}
          >
            <option value={defensive}>defensive 5-3-2</option>
            <option value={classic}>classic 4-4-2</option>
            <option value={offensive}>offensive 4-3-3</option>
          </select>
        </Label>
      </Form>
      <Label className="label">
        <p>
          Your Team Rating: <span>{team.rating}</span>
        </p>
      </Label>
      <img src={team.logo} />

      <Button className="submit-btn" type="submit" onClick={onClick}>
        Submit
      </Button>
    </Container>
  );
}

export default TeamForm;
