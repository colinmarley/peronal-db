
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { CoffeeRoastModel, coffeeRoastConverter } from '../../models/CoffeeRoastModel';
import { CoffeeClient } from '../../clients/coffeeClient';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { View, Text } from '../Themed';

const CoffeeList = () => {
    const [coffees, setCoffees] = useState<CoffeeRoastModel[]>([]);

    const coffeeClient = new CoffeeClient();

    useEffect(() => {
        getAllCoffeeRoasts();
    }, []);

    async function getAllCoffeeRoasts() {
        await coffeeClient.getAllCoffeeRoasts().then((result: any) => {
          setCoffees(result);
        });
      }

    return (
    <View>
        <Text>Coffee List</Text>
        
        <ul>
        {coffees.map((coffee: CoffeeRoastModel) => (
            <li key={coffee.id}>
                <Text key="roastNameKey">{coffee.roastName}</Text>
                <Text key="roastTypeKey">{coffee.roastType}</Text>
                <Text key="processKey">{coffee.process}</Text>
                <Text key="flavorsKey">{coffee.flavors}</Text>
                <Text key="roasterNameKey">{coffee.roasterName}</Text>
                <Text key="sourcedFromKey">{coffee.sourcedFrom}</Text>
                <Text key="sourceNameKey">{coffee.sourceName}</Text>
            </li>
        ))}
        </ul>
    </View>
    );
};

export default CoffeeList;
