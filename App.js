import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Text } from 'react-native-elements';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { getTodos } from './services/api-service';
import { API_URL } from '@env';

export default function App() {
  const [userTodos, setMyTodos] = useState([])

  // fetch all todos
  useEffect(() => {
    (
      async () => {
        const url = API_URL
        const apiRes = await getTodos(url)
        setMyTodos(apiRes)
      }
    )()
  }, [userTodos])

  return (
    // SafeAreaView adds padding so the notch doesn't cover the content
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={{ text: 'left' }}
        centerComponent={{ text: 'MY TODOS' }}
        rightComponent={{ text: 'right' }}
      />

      <AddTodo />

      {/* maximum zoom scale allows for pinch to zoom */}
      <ScrollView maximumZoomScale={5}>
        <Text h1>My Todos</Text>

        {/* Wrap in ScrollView so the overflow todos scroll */}
        <TodoList myTodos={userTodos} />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
