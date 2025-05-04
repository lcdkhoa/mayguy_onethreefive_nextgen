import { useDevice } from '@/contexts/DeviceContext';
import { Grid, Typography, useTheme } from '@mui/material';

export default function Home() {
	const { isMobile } = useDevice();
	const theme = useTheme();
	return (
		<Grid container justifyContent={'center'} sx={{ overflow: 'hidden' }}>
			<Grid container justifyContent={'center'} alignContent={'center'}>
				<img
					src="/images/backgrounds/under_construction.png"
					alt="Under Construction"
					style={{
						objectFit: 'scale-down',
						maxHeight: isMobile ? '40vh' : '65vh',
					}}
					className={`zoom-in`}
				/>
			</Grid>
			<Typography
				variant={!isMobile ? 'h2' : 'body1'}
				color={theme.palette.text.primary}
			>
				WELCOME TO MY HOME
			</Typography>
		</Grid>
	);
}
