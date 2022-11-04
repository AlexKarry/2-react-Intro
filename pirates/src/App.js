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

const addPirate = (pirate) => {
  pirate.image = "avatar.png";
  setPirates((prev) => [pirate, ...prev]);
};

const removePirate = (pirateName) => {
  const newPirates = pirates.filter((pirate) => pirate.name !== pirateName);
  setPirates(newPirates);
  // setPirates([...newPirates]);
};

  return (
    <div>
      <Header title={randomize()} />

      <div className="pirate">
        <AddPirate addPirate={addPirate} />
        {pirates.map((pirate) => (
          <Pirate tagline={randomize()} pirate={pirate} removePirate={removePirate} />
        ))}
      </div>
      {/* <Pirate name="Hello">Alex</Pirate> */}
    </div>
  );
}

export default App;
