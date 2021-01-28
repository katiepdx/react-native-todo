import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import doneIcon from '../assets/completed/done.png'
import notDoneIcon from '../assets/completed/not-done.png'

export const TodoItem = ({ todo }) => {
  return (
    <View style={styles.todoStyles}>
      <Text style={styles.text}>Todo: {todo.todo}</Text>
      <Text style={styles.text, todo.completed ? styles.done : styles.notDone}>
        Status:
        {todo.completed
          ? 'DONE' && <Image source={doneIcon} style={styles.image} />
          : 'not done' && <Image source={notDoneIcon} style={styles.image} />}
      </Text>

      <Text>Notes: {todo.notes}</Text>
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
  },
  image: {
    height: 20,
    width: 20
  }

});
