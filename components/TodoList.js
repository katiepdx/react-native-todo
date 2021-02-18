import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TodoItem } from './TodoItem';

export const TodoList = ({ myTodos }) => {
  const handleSwipeLeft = () => <Text style={styles.swipeLeft}> Complete</Text >;
  const handleSwipeRight = () => <Text style={styles.swipeRight}>Delete</Text>;

  return (
    <FlatList
      data={myTodos}
      // key - destructured todo
      keyExtractor={({ todo }) => todo}
      // renderItem MUST be passed an item
      renderItem={({ item }) => (
        <View>
          <Swipeable
            renderLeftActions={handleSwipeLeft}
            renderRightActions={handleSwipeRight}
          >
            <TodoItem todo={item} />
          </Swipeable>
        </ View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  swipeLeft: {
    borderColor: 'limegreen',
    backgroundColor: 'darkgreen',
    borderStyle: 'solid',
    borderWidth: 4,
    margin: 4,
    padding: 10,
    borderRadius: 3
  },
  swipeRight: {
    borderColor: 'pink',
    backgroundColor: 'red',
    borderStyle: 'solid',
    borderWidth: 4,
    margin: 4,
    padding: 10,
    borderRadius: 3
  },
});
