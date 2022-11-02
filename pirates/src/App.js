import Header from "./components/Header";
import { Pirate } from "./components/Pirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <Pirate name="Hello">Alex</Pirate>
    </div>
  );
}

export default App;
