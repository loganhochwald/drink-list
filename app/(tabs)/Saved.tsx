import { StyleSheet, Text, View } from 'react-native';

export default function Saved() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Drinks Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
