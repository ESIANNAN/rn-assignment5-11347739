import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const settings = [
    { key: '1', settings: 'Language' },
    { key: '2', settings: 'My Profile' },
    { key: '3', settings: 'Contact Us' },
    { key: '4', settings: 'Change Password' },
    { key: '5', settings: 'Privacy Policy' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SETTINGS</Text>
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <View style={styles.settingsItem}>
            <Text style={styles.settingsText}>{item.settings}</Text>
            <Text style={styles.arrow}>{'>'} </Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.themesContainer}>
            <Text style={styles.themesText}>Themes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        }
        keyExtractor={item => item.key}
        contentContainerStyle={styles.listContentContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    backgroundColor: '#fff',
  },
  settingsText: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
  },
  arrow: {
    fontSize: 20,
  },
  themesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    backgroundColor: '#fff',
  },
  themesText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
