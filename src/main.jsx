import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import "tailwindcss/tailwind.css";
import { Parejas } from './components/Parejas.jsx';
import { Votation } from './components/Votation.jsx';
import { VoteProvider } from './contexts/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parejas />
  </StrictMode>,
);
