import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes.jsx';
import './styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
