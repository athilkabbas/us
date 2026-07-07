import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Story />
      <Gallery />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'var(--color-bg-card)',
        color: 'var(--color-text-light)',
        borderTop: '1px solid var(--color-primary-light)'
      }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
          Forever & Always ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;
