import { Montserrat } from '@fontsource/montserrat';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="hero-section">
        <h1 className="hero-text">
          <span className="hero-line">Hi.</span>
          <span className="hero-line">I'm Maria.</span>
          <span className="hero-line">A Software Developer</span>
        </h1>
      </main>
    </div>
  );
}

export default App;