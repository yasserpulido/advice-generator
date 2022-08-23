import React from "react";
import { Advice } from "./components/advice/Advice";
import { Card } from "./components/UI/Card";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Card>
        <Advice />
      </Card>
      <footer>
        <div className="attribution">
          Challenge by&nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a href="https://www.frontendmentor.io/profile/yasserpulido">
            Yasser Pulido
          </a>
          .
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
