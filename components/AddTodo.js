import React, { useState } from 'react'
import { Text } from 'react-native-elements'
import { Button, StyleSheet, View, TextInput } from 'react-native'
import { addTodo } from '../services/api-service'
import { API_URL } from '@env'

const AddTodo = () => {
  const [email, setEmail] = useState('');
  const [userTodo, setTodo] = useState('');
  const [todoNotes, setTodoNotes] = useState('');
  const [completedState, setCompletedState] = useState(false)

  const handleEmailChange = (email) => setEmail(email)
  const handleTodoChange = (userTodo) => setTodo(userTodo)
  const handleTodoNotesChange = (todoNotes) => setTodoNotes(todoNotes)

  const handleSubmit = async () => {
    // check for a blank form
    if (!email || !userTodo || !todoNotes) {
      return alert('Please add a todo')
    }

    const todoToAdd = {
      userEmail: email,
      todo: userTodo,
      notes: todoNotes,
      completed: completedState,
      dateAdded: new Date(Date.now())
    }

    await addTodo(API_URL, todoToAdd)

    // reset form
    setEmail('')
    setTodo('')
    setTodoNotes('')
  }
  return (
    <View>
      <View style={styles.addTodo}>
        <Text h1>Add a New Todo</Text>

        <Text>Email</Text>
        <TextInput
          placeholder='hello@email.com'
          style={styles.formStyle}
          value={email}
          onChangeText={handleEmailChange}
        />

        <Text>Todo</Text>
        <TextInput
          placeholder='Add a todo!'
          autoCapitalize='sentences'
          style={styles.formStyle}
          value={userTodo}
          onChangeText={handleTodoChange}
        />

        <Text>Notes</Text>
        <TextInput
          placeholder='notes about my todo'
          autoCapitalize='sentences'
          style={styles.formStyle}
          value={todoNotes}
          onChangeText={handleTodoNotesChange}
        />
      </View>

      <Button
        onPress={handleSubmit}
        title='Submit'
        accessibilityLabel='add a todo'
        style={styles.button}
      />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  formStyle: {
    borderColor: 'grey',
    borderBottomWidth: 2
  },
  border: {
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  addTodo: {
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 5,
    padding: 20
  }
})
