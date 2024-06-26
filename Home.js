// Home.js

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const sentImage = require('./assets/sent.png');
const receiveImage = require('./assets/receive.png');
const loanImage = require('./assets/Loan.png');
const topUpImage = require('./assets/Topup.png');

const tasks = [
    { id: '1', title: 'Apple', image: require('./assets/apple.png'), category: 'Entertainment', cost: '-$5.99' },
    { id: '2', title: 'Spotify', image: require('./assets/spotify.png'), category: 'Music', cost: '-$12.99' },
    { id: '3', title: 'Money Transfer', image: require('./assets/receive.png'), category: 'Transaction', cost: '$300' },
    { id: '4', title: 'Grocery', image: require('./assets/Grocery.png'), category: 'Payment', cost: '-$88' },
    { id: '5', title: 'Netflix', image: require('./assets/netflix.png'), category: 'Payment', cost: '$10' },
];

export default function Home() {
    const navigation = useNavigation(); // Initialize navigation

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.welcomeText}>Welcome back,</Text>
                    <Text style={styles.name}>Philomina Annan</Text>
                </View>
                <Image source={require('./assets/credit-card.png')} style={styles.creditIcon} resizeMode='contain' />
                <View style={styles.tabContainer}>
                    <TabButton image={sentImage} label="Sent" />
                    <TabButton image={receiveImage} label="Receive" />
                    <TabButton image={loanImage} label="Loan" />
                    <TabButton image={topUpImage} label="Top Up" />
                </View>
                <View style={styles.transactionActivity}>
                    <Text style={styles.transaction}>Transaction</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.seeText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={styles.taskBox}>
                            <Image source={item.image} style={styles.taskImage} />
                            <View>
                                <Text style={styles.task}>{item.title}</Text>
                                <Text style={styles.taskDetails}>{item.category}</Text>
                            </View>
                            <Text style={styles.taskCost}>{item.cost}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.bottomBarItem}>
                        <Image source={require('./assets/Home-tab.png')} style={styles.bottomBarIcon} />
                        <Text style={styles.bottomBarText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBarItem}>
                        <Image source={require('./assets/Statistics.png')} style={styles.bottomBarIcon} />
                        <Text style={styles.bottomBarText}>Statistics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Settings')}>
                        <Image source={require('./assets/Settings.png')} style={styles.bottomBarIcon} />
                        <Text style={styles.bottomBarText}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const TabButton = ({ image, label }) => (
    <TouchableOpacity style={styles.tab}>
        <Image source={image} style={styles.tabImage} resizeMode="contain" />
        <Text style={styles.tabText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    profileContainer: {
        marginLeft: 40,
    },
    welcomeText: {
        fontSize: 24,
        color: 'grey',
    },
    name: {
        fontSize: 28,
    },
    creditIcon: {
        marginTop: 40,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: '100%',
    },
    tab: {
        alignItems: 'center',
    },
    tabImage: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    transactionActivity: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 20,
    },
    transaction: {
        fontSize: 28,
        marginRight: 100,
        marginTop: 30,
        fontWeight: 'bold',
    },
    seeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007FFF',
        marginTop: 36,
    },
    taskBox: {
        flexDirection: 'row',
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 12,
        padding: 8,
        width: 350,
        marginLeft: 5,
        alignItems: 'center',
    },
    taskImage: {
        width: 30,
        height: 30,
        borderRadius: 40,
        backgroundColor: '#eeeeee',
        padding: 25,
    },
    task: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    taskDetails: {
        fontSize: 16,
        color: 'grey',
        marginLeft: 10,
    },
    taskCost: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 'auto',
        color: 'black',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingVertical: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomBarItem: {
        alignItems: 'center',
    },
    bottomBarIcon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    bottomBarText: {
        fontSize: 14,
        color: '#666',
    },
    scrollContainer: {
        flexGrow: 1,
    },
});

export { Home, styles };
