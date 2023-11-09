// setup client to connect to "coffee-roasts" firebase collection
import { CollectionReference, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import React from 'react';
import { coffeeRoastConverter } from '../models/CoffeeRoastModel';
import { coffeeRoasterConverter } from '../models/CoffeeRoasterModel';

export class CoffeeClient {

    roastsRef: CollectionReference<any> = collection(db, 'coffee-roasts').withConverter(coffeeRoastConverter);
    roastersRef: CollectionReference<any> = collection(db, 'coffee-roasters').withConverter(coffeeRoasterConverter);

    async getAllCoffeeRoasts() {
        const coffeeRoastRef = collection(db, 'coffee-roasts');
        return await getDocs(coffeeRoastRef).then((querySnapshot) => {
            const coffeeRoasts: any[] = [];
            querySnapshot.forEach((doc) => {
                coffeeRoasts.push(doc.data());
            });
            return coffeeRoasts;
        })
    }


    async getAllCoffeeRoasters(): Promise<any> {
        const coffeRoasterRef = collection(db, 'coffee-roasters');
        return await getDocs(coffeRoasterRef);
    }
}