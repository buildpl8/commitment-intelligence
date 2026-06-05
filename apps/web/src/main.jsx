import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function HealthPage() {
  return (
    <main className="shell">
      <pre>{JSON.stringify({ status: 'ok', service: 'web' }, null, 2)}</pre>
    </main>
  );
}

function HomePage() {
  return (
    <main className="shell">
      <p className="eyebrow">Repository Foundation</p>
      <h1>Commitment Intelligence</h1>
      <p>System initialization complete.</p>
    </main>
  );
}

function App() {
  return window.location.pathname === '/health' ? <HealthPage /> : <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
