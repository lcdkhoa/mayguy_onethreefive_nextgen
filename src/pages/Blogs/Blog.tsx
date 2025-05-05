import {
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Typography,
} from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const blogPosts = [
	{
		id: 1,
		title: 'Bài viết đầu tiên',
		excerpt: 'Đây là đoạn trích của bài viết đầu tiên...',
		date: '2024-03-20',
	},
	{
		id: 2,
		title: 'Bài viết thứ hai',
		excerpt: 'Đây là đoạn trích của bài viết thứ hai...',
		date: '2024-03-21',
	},
];

export default function Blog() {
	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h2" component="h1" gutterBottom>
				Blog
			</Typography>
			<Grid container spacing={3}>
				{blogPosts.map((post) => (
					<Grid>
						<Card>
							<CardContent>
								<Typography variant="h5" component="h2" gutterBottom>
									{post.title}
								</Typography>
								<Typography variant="body2" color="text.secondary" gutterBottom>
									{post.date}
								</Typography>
								<Typography variant="body1">{post.excerpt}</Typography>
							</CardContent>
							<CardActions>
								<Button component={Link} to={`/blog/${post.id}`} size="small">
									Đọc thêm
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
