import React from "react";
import "./App.css";
import SocialFollow from "./socialFollow";

function App() {
  return (
    <div className="App">
      <div className="buildingPage">
        <header id="header">
          <h1>home-umzüge.de</h1>
        </header>

        <div className="content">
          <h1>&lt; baustelle /&gt;</h1>
          <p>Working day and night!</p>
          <SocialFollow />
        </div>

        <div id="outerCraneContainer">
          <div className="buildings">
            <div />
            <div className={1} />
            <div className={2} />
            <div className={3} />
            <div className={4} />
          </div>
          <div className="crane craneThree">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneTwo">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneOne">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
