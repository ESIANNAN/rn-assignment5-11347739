import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.name}>Philomina Annan</Text>
      <StatusBar style="auto" />
    </View>
     
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 120,
  },
   profileContainer: {
    marginLeft: -60,
  },
    welcomeText: {
    fontSize: 24, 
    color: 'grey',
  },
  name: {
    fontSize: 28,
  },
});
