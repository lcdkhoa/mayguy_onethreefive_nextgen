import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const blogPosts = [
	{
		id: 1,
		title: 'Bài viết đầu tiên',
		content: 'Nội dung đầy đủ của bài viết đầu tiên...',
		date: '2024-03-20',
	},
	{
		id: 2,
		title: 'Bài viết thứ hai',
		content: 'Nội dung đầy đủ của bài viết thứ hai...',
		date: '2024-03-21',
	},
];

export default function BlogDetail() {
	const { id } = useParams();
	const post = blogPosts.find((p) => p.id === Number(id));

	if (!post) {
		return (
			<Container maxWidth="lg">
				<Typography variant="h5" component="h1">
					Bài viết không tồn tại
				</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Typography variant="h2" component="h1" gutterBottom>
					{post.title}
				</Typography>
				<Typography variant="body2" color="text.secondary" gutterBottom>
					{post.date}
				</Typography>
				<Typography variant="body1" paragraph>
					{post.content}
				</Typography>
			</Box>
		</Container>
	);
}
