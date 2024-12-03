// NotFoundScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Страница не найдена</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'red',
  },
});

export default NotFoundScreen;