import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar/NavBar";
import defaultTheme from "./theme";
import NavSidebar from "./components/NavSidebar/NavSidebar";
import "./App.css";
import MainContainer from "./components/MainContainer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <div className="App">
          <NavSidebar />
          <div className="content">
            <NavBar />
            <div className="main-content">
              <MainContainer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
