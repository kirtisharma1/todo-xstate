import React from 'react'
import { CreateTodo } from '../../molecules/CreateTodo/CreateTodo';
import { TodoList } from '../../molecules/TodoList/TodoList';

export const Home = () => {
  return (
    <main>
      <CreateTodo />
      <TodoList />
    </main>
  )
}
