import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Label, Form, Button, Input } from 'semantic-ui-react';
import { classic, defensive, offensive } from '../utils/teamModules';
import { Player, TeamFormProps } from '../interfaces';

const Container = styled.div`
  background-color: #17135d;
  color: white;
  margin-right: 1rem;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70vh;
  padding-top: 2em;
  padding-bottom: 1em;
  padding-left: 0.4em;
  border-radius: 15px;
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-top: auto;
  }
  .label {
    max-width: 90%;
    margin-top: 0.6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    margin: auto;
    max-width: 40%;
    max-height: 40%;
  }
`;

function TeamForm({
  onSelectChange,
  onNameChange,
  onLogoChange,
  onClick,
  team,
}: TeamFormProps) {
  const [nameError, setNameError] = useState(true);
  const [logoError, setLogoError] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    if (!nameError && !logoError) {
      setDisableBtn(false);
    }
  }, [nameError, logoError]);

  return (
    <Container>
      <div>
        <h3>Your Team Name: {team.teamName}</h3>
      </div>
      <Form>
        <Label className="label">
          Choose a Name
          <Form.Input
            error={nameError}
            placeholder="Name Your team"
            onChange={(e) => {
              onNameChange(e);
              setNameError(false);
            }}
          />
        </Label>
        <Label className="label">
          Choose a Logo
          <Form.Input
            error={logoError}
            placeholder="Insert an Image url"
            onChange={(e) => {
              onLogoChange(e);
              setLogoError(false);
            }}
          />
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
      <img src={team.logo} alt="logo" />

      <Button
        disabled={disableBtn}
        className="submit-btn"
        type="submit"
        onClick={onClick}
      >
        Submit
      </Button>
    </Container>
  );
}

export default TeamForm;
