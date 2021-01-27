import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [lines, setLines] = useState(1);

  const handleTextClick = () => {
    console.log('text clicked')
    lines === 1 ? setLines(5) : setLines(1)
  }

  return (
    // SafeAreaView adds padding so the notch doesn't cover the content
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={lines} onPress={handleTextClick}>
        text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  }
});
