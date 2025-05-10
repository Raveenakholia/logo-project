/** @format */

import { createRoot } from 'react-dom/client';
import App from './App';

import './src/styles.scss';
const root = createRoot(document.getElementById('root'));
if (!root) {
  throw new Error('Root element not found');
}

root.render(<App />);
