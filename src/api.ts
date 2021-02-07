interface Todo {
	title: string
	completed: boolean
}

const todos: Todo[] = [
	{
		title: 'Complete Idyllic compiler',
		completed: true,
	},
	{
		title: 'Complete Idyllic web server',
		completed: true,
	},
	{
		title: 'Finish writing documentation',
		completed: false,
	},
]

export const getAllTodos = (req: any) => {
	return todos
}

export const getOneTodo = ({ query: { id } }: any) => {
	const todo = todos[id]

	if (todo === undefined) {
		throw new Error(`Could not find todo with ID: "${id}".`)
	}

	return todo
}

export const addTodo = (req: any) => {
	todos.push(req.body)
	return req.body
}

export const completeTodo = ({ query: { id } }: any) => {
	const todo = todos[id]

	if (todo === undefined) {
		throw new Error(`Could not find todo with ID: "${id}".`)
	}

	todo.completed = !todo.completed

	return todo
}
