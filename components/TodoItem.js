import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import doneIcon from '../assets/completed/done.png';
import notDoneIcon from '../assets/completed/not-done.png';
import { deleteTodo } from '../services/api-service';
import { API_URL } from '@env';

export const TodoItem = ({ todo }) => {
  const [viewNotes, setViewNotes] = useState(true);

  const handleNoteToggle = () => {
    viewNotes ? setViewNotes(false) : setViewNotes(true);
  };

  const handleDeleteTodo = async () => {
    const res = await deleteTodo(API_URL, todo.todoId);
    if (!res.ok) alert(`Unable to delete todo ${todo.todoId}`);
  };

  const handleDeleteConfirmation = () => {
    Alert.alert(
      `Delete a Todo ${todo.todoId}`,
      "Are you sure?",
      [
        { text: "Cancel", onPress: () => { } },
        { text: "OK", onPress: handleDeleteTodo }
      ]
    );
  };
  return (
    <TouchableOpacity
      style={todo.completed ? styles.done : styles.notDone}
      onLongPress={handleDeleteConfirmation}>

      <Text onPress={handleNoteToggle}>
        {
          todo.completed
            ? <Image source={doneIcon} style={styles.image} />
            : <Image source={notDoneIcon} style={styles.image} />
        }
        <Text>Todo ID: {todo.todoId}</Text>
        <Text>Todo: {todo.todo}</Text>
      </Text>
      <Text style={viewNotes ? styles.hidden : styles.display} onPress={handleNoteToggle} > Notes: {todo.notes}</Text>

    </TouchableOpacity >
  );
};

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
