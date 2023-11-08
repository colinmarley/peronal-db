
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { getDummyValue } from '../../firebase/firebaseConfig';

interface DashboardProps {
  header: string;
}

const Dashboard: React.FC<DashboardProps> = ({ header }) => {
  let testValue = "Testing 123";
  function getTestValue() {
    getDummyValue().then((value) => {
      testValue = value;
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
