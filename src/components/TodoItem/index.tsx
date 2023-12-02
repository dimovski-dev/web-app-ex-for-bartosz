import { Flex, Tag, Text } from "@chakra-ui/react"
import { Todo } from "@shared/interfaces/Todos.interface"

interface TodoItemProps {
	todo: Todo
}

export const TodoItem = ({todo}: TodoItemProps) => {
	return (
		<Flex padding={'10px'} flexDirection={'column'} alignItems={'center'} width={'500px'} height={'fit-content'} backgroundColor={'#fff'}>
			<Tag>{todo.id}</Tag>
			<Text>Created by: {todo.userId}</Text>
			<Text>Title: {todo.title}</Text>
			<Text borderRadius={'10px'} padding={'10px'} width={'fit-content'} backgroundColor={todo.completed ? "#7edf4a" : "#e53430"}>{todo.completed ? "Completed" : "Not completed"}</Text>
		</Flex>
	)
}