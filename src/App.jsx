import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="hero-section">
        <h1 className="hero-text">
          <span className="hero-line">Hi. I'm Maria Ordaz.</span>
          <span className="hero-line">A Software Developer.</span>
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;