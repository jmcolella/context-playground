import React from 'react';
import styled from 'styled-components';
import Value from './Value';
import Button from './Button';
import { useThemeContext } from './ThemeContext';

const StyledDisplay = styled.div(({ theme }) => `
  align-items: center;
  background-color: ${theme === 'dark' ? 'black' : 'white'};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 100vh;
  transition: all .5s ease;
  width: 100%;
`);

function Display(props) {
  const { theme } = useThemeContext();

  return (
    <StyledDisplay theme={theme}>

      <Value />

      <Button>
        Toggle Theme
      </Button>
    </StyledDisplay>
  );
}

export default Display;
