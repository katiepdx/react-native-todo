import React from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

const AddTodo = () => {
  return (
    <View style={styles.addTodo}>
      {/* Add a todo with TextInput */}
      <Text>Todo</Text>
      <TextInput
        placeholder='Add a todo!'
        autoCapitalize='sentences'
        style={styles.borders}
      />

      <Button
        onPress={() => console.log('button pressed')}
        title='Submit'
        accessibilityLabel='add a todo'
        style={styles.borders} />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  borders: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  addTodo: {
    height: 100,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 10,
    backgroundColor: 'red'
  }
})
