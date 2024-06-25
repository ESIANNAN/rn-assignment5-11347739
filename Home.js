import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';


const sentImage = require('./assets/sent.png');
const receiveImage = require('./assets/receive.png');
const loanImage = require('./assets/Loan.png');
const topUpImage = require('./assets/Topup.png');


export default function App() {
    
const tasks = [
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Spotify' },
    { id: '3', title: 'Money Transfer' },
    { id: '4', title: 'Grocery' },
    { id: '5', title: 'Netflix' },
  ];
    
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
<View style={styles.container}>
    <View style={styles.profileContainer}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.name}>Philomina Annan</Text>
      
    </View>
    <Image source={require('./assets/credit-card.png')}style={styles.creditIcon} resizeMode='contain' />

    <View style={styles.tabContainer}>
        <TabButton image={sentImage} label="Sent" />
        <TabButton image={receiveImage} label="Receive" />
        <TabButton image={loanImage} label="Loan" />
        <TabButton image={topUpImage} label="Top Up" />
    </View>

    <View style={styles.transactionActivity}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.seeText}>See All</Text>
    </View>
    
 <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskBox}>
             <Image source={item.image} style={styles.taskImage} />
              <Text style={styles.task}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />

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
    marginTop: 120,
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
  },
  seeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007FFF',
    marginTop: 8,
  },
    taskBox: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 12,
    padding: 40,
    width: 350,
    Height: 200,
    marginLeft: 12,
  },
  task: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  
});
