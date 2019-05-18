import React, { useContext } from 'react';
import styled from 'styled-components';
import { useThemeContext } from './ThemeContext';

const StyledP = styled.p(({ theme }) => `
  color: ${theme === 'dark' ? 'white' : 'black'};
  margin 0;
  margin-bottom: 24px;
  transition: all .5s ease;
`);

function Value() {
  const { theme } = useThemeContext();

  return (
    <StyledP theme={theme}>{ theme }</StyledP>
  );
}

export default Value;
