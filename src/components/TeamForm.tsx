import React from 'react';
import styled from 'styled-components';
import { Label, Form, Button, Input } from 'semantic-ui-react';
import { classic, defensive, offensive } from '../utils/teamModules';

const Container = styled.div`
  background-color: #17135d;
  color: white;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 60vh;
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-top: auto;
  }
  .input {
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface TeamFormProps {
  onSelectChange: (e: any) => void;
  onNameChange: (e: any) => void;
  onLogoChange: (e: any) => void;
  onClick: () => void;
  teamName: string;
  logo: string;
  rating: number;
  module: string[];
}

function TeamForm({
  onSelectChange,
  onNameChange,
  onLogoChange,
  onClick,
  teamName,
  logo,
  rating,
  module,
}: TeamFormProps) {
  return (
    <Container>
      <div className="team-name">
        <h2>Your Team Name: {teamName}</h2>
      </div>
      <Form>
        <Label className="input">
          Choose a Name
          <Input placeholder="Name Your team" onChange={onNameChange} />
        </Label>
        <Label className="input">
          Choose a Logo
          <Input placeholder="Insert an Image url" onChange={onLogoChange} />
        </Label>
        <Form.Field />
      </Form>

      <Label className="input" l>
        Select Your Module
        <select
          value={module}
          className="ui dropdown "
          onChange={onSelectChange}
        >
          <option value={defensive}>defensive 5-3-2</option>
          <option value={classic}>classic 4-4-2</option>
          <option value={offensive}>offensive 4-3-3</option>
        </select>
      </Label>
      <Label className="input">
        <p>
          Your Team Rating: <span>{rating}</span>
        </p>
        <img src={logo} />
      </Label>
      <Button className="submit-btn" type="submit" onClick={onClick}>
        Submit
      </Button>
    </Container>
  );
}

export default TeamForm;
