/** @format */

import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

const root = createRoot(document.getElementById('root'));
if (!root) {
  throw new Error('Root element not found');
}

root.render(<App />);
