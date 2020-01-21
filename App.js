import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Comments from './components/Comments'; //import the Comments component

export default function App() {
  return (
    <View style={styles.container}>
      <Comments/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});