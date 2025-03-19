import React from "react";
import { ThemeProvider,UseButtonStyle  } from "./theme/ThemeContext";
import RoutesApp from "./Routes/RoutesApp";
import "./App.css"

const App = () => {
 return (
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
