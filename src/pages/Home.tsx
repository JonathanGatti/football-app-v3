import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: black;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

function Home() {
  return (
    <HomePage>
      <h1>The Football App</h1>
    </HomePage>
  );
}

export default Home;
