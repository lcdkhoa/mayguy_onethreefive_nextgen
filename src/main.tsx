import ThemeRegistry from '@/components/ThemeRegistry';
import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/css/fonts.css';
import '@/styles/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const MOUNT_NODE = document.getElementById('root');
ReactGA.initialize('G-VBJ37C6M1G');

ReactDOM.createRoot(MOUNT_NODE!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<ThemeRegistry>
					<App />
				</ThemeRegistry>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
