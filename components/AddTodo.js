import React, { useState } from 'react'
import { Text } from 'react-native-elements'
import { Button, StyleSheet, View, TextInput } from 'react-native'

const AddTodo = () => {
  const [email, setEmail] = useState('');
  const [todo, setTodo] = useState('');
  const [todoNotes, setTodoNotes] = useState('');
  const [completedState, setCompletedState] = useState(false)

  const handleEmailChange = (email) => setEmail(email)
  const handleTodoChange = (todo) => setTodo(todo)
  const handleTodoNotesChange = (todoNotes) => setTodoNotes(todoNotes)

  const handleSubmit = () => {
    console.log(email, todo, todoNotes, completedState)
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
          value={todo}
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
