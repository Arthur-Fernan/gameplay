import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Essa tela é de entrada</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89c108ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});