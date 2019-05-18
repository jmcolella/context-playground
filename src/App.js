import React, { useState } from 'react';
import './App.css';

import Display from './Display';
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Display />
    </ThemeContextProvider>
  );
}

export default App;
