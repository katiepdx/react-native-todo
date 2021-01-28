import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import doneIcon from '../assets/completed/done.png'
import notDoneIcon from '../assets/completed/not-done.png'

export const TodoItem = ({ todo }) => {
  const [viewNotes, setViewNotes] = useState(false)

  const handleNoteToggle = () => {
    viewNotes ? setViewNotes(false) : setViewNotes(true)
  }

  return (
    <View style={todo.completed ? styles.done : styles.notDone} >
      <Text onPress={handleNoteToggle}>
        {
          todo.completed
            ? <Image source={doneIcon} style={styles.image} />
            : <Image source={notDoneIcon} style={styles.image} />
        }
        <Text>Todo: {todo.todo}</Text>
      </Text>
      <Text style={viewNotes ? styles.hidden : styles.display} onPress={handleNoteToggle} > Notes: {todo.notes}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  done: {
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 4,
    margin: 4,
    padding: 10,
    borderRadius: 3
  },
  notDone: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 4,
    margin: 4,
    padding: 10,
    borderRadius: 3
  },
  text: { fontSize: 20 },
  image: { height: 20, width: 20 },
  hidden: { display: 'none' },
  display: { display: 'flex' }
});
