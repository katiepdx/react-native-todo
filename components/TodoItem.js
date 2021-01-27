import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TodoItem = ({ todo }) => {
  return (
    <View style={styles.todoStyles}>
      <Text style={styles.text}>Todo: {todo.todo}</Text>
      <Text style={styles.text, todo.completed ? styles.done : styles.notDone}>
        Status: {todo.completed ? 'DONE' : 'not done'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todoStyles: {
    backgroundColor: 'salmon',
    margin: 2,
    padding: 10,
    borderRadius: 3
  },
  text: {
    fontSize: 20
  },
  done: {
    backgroundColor: 'green'
  },
  notDone: {
    backgroundColor: 'red'
  }

});
