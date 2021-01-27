import React from 'react'
import { View, Text } from 'react-native'
import { TodoItem } from './TodoItem'

export const TodoList = ({ myTodos }) => {
  return myTodos.map((todo, index) => (
    <View key={index}>
      <TodoItem todo={todo} />
    </View>
  ))
}
