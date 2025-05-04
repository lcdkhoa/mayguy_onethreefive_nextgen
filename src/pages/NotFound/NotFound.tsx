import { Grid, Typography } from '@mui/material';

const NotFound = () => {
	return (
		<Grid container>
			<Grid container justifyContent={'center'} alignContent={'flex-end'}>
				<Typography variant="h1" color="#1273AA">
					Whoops
				</Typography>
			</Grid>
			<Grid container justifyContent={'center'} pt={5}>
				<Typography variant="body1" color="#1273AA">
					Looking for something?
				</Typography>
			</Grid>
		</Grid>
	);
};

export default NotFound;
