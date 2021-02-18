import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Text } from 'react-native-elements';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { getTodos } from './services/api-service';
import { API_URL } from '@env';

export default function App() {
  const [userTodos, setMyTodos] = useState([]);

  // fetch all todos
  useEffect(() => {
    (
      async () => {
        const url = API_URL;
        const apiRes = await getTodos(url);
        setMyTodos(apiRes);
      }
    )();
  }, [userTodos]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={{ text: 'left' }}
        centerComponent={{ text: 'MY TODOS' }}
        rightComponent={{ text: 'right' }}
      />

      <AddTodo />

      <Text h1>My Todos</Text>
      <TodoList myTodos={userTodos} />

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
