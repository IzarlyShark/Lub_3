import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <BlurView intensity={50} style={styles.absolute} blurType="light">
        <Text style={styles.text}>
          Hi! My name is Senya - on his fist is the North, he is 47 and he is blind.
        </Text>
      </BlurView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f70776',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    padding: 20,
  },
});