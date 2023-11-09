
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { getDummyValue } from '../../firebase/firebaseConfig';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import CoffeeList from '../../components/coffee/CoffeeList';
import { CoffeeRoastModel, coffeeRoastConverter } from '../../models/CoffeeRoastModel';
import { CoffeeClient } from '../../clients/coffeeClient';

interface DashboardProps {
  header: string;
}

const Dashboard: React.FC<DashboardProps> = ({ header }) => {

  // create a state variable to hold the test value
  const [testValue, setTestValue] = React.useState('Testing 123');
  const [coffeeRoasts, setCoffeeRoasts] = React.useState<CoffeeRoastModel[]>([]);


  const coffeeClient = new CoffeeClient();

  async function getTestValue() {
    await getDummyValue().then((result) => {
      setTestValue(result);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      {/* Add your dashboard content here */}
      <Text>Add Overviews of personal DBs here.</Text>
      <TouchableOpacity onPress={getTestValue}>
        <Text>{testValue}</Text>
      </TouchableOpacity>
      <CoffeeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Dashboard;
