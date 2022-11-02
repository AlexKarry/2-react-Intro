function App() {
  return (
    <div>
      <Pirate name="Hello">Alex</Pirate>
    </div>
  );
}

function Pirate({ name, children }) {
  return (
    <p>
      {name} {children}
    </p>
  );
}

export default App;
