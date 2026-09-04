import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import LegalPage from './Pages/LegalPage';

function App() {
  const [activeRoute, setActiveRoute] = useState('home');

  useEffect(() => {
    const updateRoute = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();

      if (hash === 'privacy') {
        setActiveRoute('privacy');
        return;
      }

      if (hash === 'terms') {
        setActiveRoute('terms');
        return;
      }

      setActiveRoute('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    updateRoute();
    window.addEventListener('hashchange', updateRoute);

    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  if (activeRoute === 'privacy') {
    return <LegalPage type="privacy" />;
  }

  if (activeRoute === 'terms') {
    return <LegalPage type="terms" />;
  }

  return <Home />;
}

export default App;
