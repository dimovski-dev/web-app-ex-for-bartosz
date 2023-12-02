import { Flex, Tag, Text } from "@chakra-ui/react"
import { Post } from "@shared/interfaces/Posts.interfaces"

interface PostItemProps {
	post: Post
}

export const PostItem = ({post}: PostItemProps) => {
	return (
		<Flex padding={'10px'} flexDirection={'column'} alignItems={'center'} width={'500px'} height={'fit-content'} backgroundColor={'#fff'}>
			<Tag>{post.id}</Tag>
			<Text>Created by: {post.userId}</Text>
			<Text>Title: {post.title}</Text>

			<Text>Body: {post.body}</Text>
		</Flex>
	)
}