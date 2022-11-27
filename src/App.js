import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blackTheme ,lightTheme} from "./theme";
import { GlobalStyles } from "./global";
import  { useState } from 'react';
import Toggle from "./Toggle";



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : blackTheme}>
      <>
        <GlobalStyles />
        <Toggle
              className="toggle"
              theme={theme}
              toggleTheme={toggleTheme}
            />
        <div>
          <Main theme={lightTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;