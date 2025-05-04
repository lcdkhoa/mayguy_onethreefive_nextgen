import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { DeviceProvider } from '@/contexts/DeviceContext';
import About from '@/pages/About/About';
import Blog from '@/pages/Blogs/Blog';
import BlogDetail from '@/pages/Blogs/components/BlogDetail';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import Tools from '@/pages/Tools/Tools';
import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<DeviceProvider>
			<Grid
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<Grid>
					<Header />
				</Grid>
				<Grid sx={{ flex: 1 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/:id" element={<BlogDetail />} />
						<Route path="/tools" element={<Tools />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Grid>
				<Grid>
					<Footer />
				</Grid>
			</Grid>
		</DeviceProvider>
	);
}

export default App;
