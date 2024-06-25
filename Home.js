import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const sentImage = require('./assets/sent.png');
const receiveImage = require('./assets/receive.png');
const loanImage = require('./assets/Loan.png');
const topUpImage = require('./assets/Topup.png');

export default function App() {
  return (
<View style={styles.container}>
    <View style={styles.profileContainer}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.name}>Philomina Annan</Text>
      
    </View>
    <Image source={require('./assets/CREDIT CARD.png')}style={styles.creditIcon} resizeMode='contain' />
   <View style={styles.tabContainer}>
        <TabButton image={sentImage} label="Sent" />
        <TabButton image={receiveImage} label="Receive" />
        <TabButton image={loanImage} label="Loan" />
        <TabButton image={topUpImage} label="Top Up" />
    </View>
    <StatusBar style="auto" /> 
</View>
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
    marginLeft: -60,
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
});
