import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Switch, StatusBar } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const settings = [
    { key: '1', settings: 'Language', type: 'normal' },
    { key: '2', settings: 'My Profile', type: 'normal' },
    { key: '3', settings: 'Contact Us', type: 'normal' },
    { key: '4', settings: 'Change Password', type: 'normal' },
    { key: '5', settings: 'Privacy Policy', type: 'normal' },
    { key: '6', settings: 'Themes', type: 'themes' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.settingsItem,
          {
            backgroundColor: isDarkMode ? '#222' : '#FFF',
            borderBottomColor: isDarkMode ? '#444' : '#CCC',
          },
        ]}
      >
        <Text style={[styles.settingsText, { color: isDarkMode ? '#FFF' : '#000' }]}>
          {item.settings}
        </Text>
        {item.type === 'themes' && (
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        )}
        {item.type === 'normal' && (
          <Text style={[styles.arrow, { color: isDarkMode ? '#FFF' : '#000' }]}>{'>'}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#FFF' }]}>
      <Text style={[styles.randomtext, { color: isDarkMode ? '#FFF' : '#000' }]}>SETTINGS</Text>
      <FlatList
        data={settings}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
      />
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  randomtext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  settingsItem: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: 350,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    borderBottomWidth: 1,
  },
  settingsText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  arrow: {
    fontSize: 20,
  },
});
