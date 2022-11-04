import React from "react";
import Header from "./components/Header";
import AddPirate from "./components/AddPirate";
import { Pirate } from "./components/Pirate";

import piratesFile from "./data/sample-pirates-array";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

//prettier-ignore
function App() {
  const [pirates, setPirates] = React.useState(piratesFile)

  return (
    <div>
      <Header title={randomize()} />

      <div className="pirate">
        <AddPirate />
        {pirates.map((pirate) => 
          <Pirate tagline={randomize()} pirate={pirate} />
        )}
      </div>
      {/* <Pirate name="Hello">Alex</Pirate> */}
    </div>
  );
}

export default App;
