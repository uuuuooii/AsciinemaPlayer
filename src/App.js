import AsciinemaPlayer from './components/asciinemaPlayer';

function App() {
  const src = '/input.cast';

  return (
    <div>
      <h1>Asciinema Player</h1>
      <AsciinemaPlayer src={src} />
    </div>
  );
}

export default App;
