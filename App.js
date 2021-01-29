import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
// import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { myTodos } from './mock-data';

export default function App() {
  return (
    // SafeAreaView adds padding so the notch doesn't cover the content
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={{ text: 'left' }}
        centerComponent={{ text: 'MY TODOS' }}
        rightComponent={{ text: 'right' }}
      />

      {/* <AddTodo /> */}

      {/* maximum zoom scale allows for pinch to zoom */}
      <ScrollView maximumZoomScale={5}>
        {/* Wrap in ScrollView so the overflow todos scroll */}
        <TodoList myTodos={myTodos} />
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
