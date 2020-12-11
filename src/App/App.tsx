import React from 'react';
import Theme from '../Theme';
import styled from 'styled-components/macro';


const Screen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 900px;
  transform: translate(-50%, -50%);
  border: 1px dotted white;
`;


function App() {
  return (
    <Theme>
      <Screen>
        Hey
      </Screen>
    </Theme>
  );
}

export default App;
