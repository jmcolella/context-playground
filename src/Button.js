import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from './ThemeContext';

const StyledButton = styled.button(({ theme }) => `
  background-color: ${theme === 'dark' ? 'black' : 'white'};
  border: 1px solid ${theme === 'dark' ? 'white' : 'black'};
  border-radius: 4px;
  color: ${theme === 'dark' ? 'white' : 'black'};
  cursor: pointer;
  padding: 12px 24px;
  transition: all .5s ease;

  &:focus {
    outline: none;
  }
`);

const Button = (props) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <StyledButton onClick={setTheme} theme={theme}>
      { props.children}
    </StyledButton>
  );
};

export default Button;

