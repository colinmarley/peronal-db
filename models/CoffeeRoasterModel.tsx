
import firebase from 'firebase/app';
import 'firebase/firestore';
import { CollectionReference, DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp, collection, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// Define the interface for the CoffeeRoasterModel
export interface CoffeeRoaster {
  id: string;
  roasterName: string;
  location: string;
  rating: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Define the Firestore data converters for the CoffeeRoasterModel
export const coffeeRoasterConverter = {
  toFirestore(coffeeRoaster: CoffeeRoaster): DocumentData {
    return {
      roasterName: coffeeRoaster.roasterName,
      location: coffeeRoaster.location,
      rating: coffeeRoaster.rating,
      createdAt: coffeeRoaster.createdAt,
      updatedAt: coffeeRoaster.updatedAt,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): CoffeeRoaster {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      roasterName: data.roasterName,
      location: data.location,
      rating: data.rating,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};

class CoffeeRoasterModel implements CoffeeRoaster {
    id: string;
    roasterName: string;
    location: string;
    rating: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;

    constructor(
        id: string,
        roasterName: string,
        location: string,
        rating: number,
        createdAt: Timestamp,
        updatedAt: Timestamp
    ) {
        this.id = id;
        this.roasterName = roasterName;
        this.location = location;
        this.rating = rating;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    toLoggableString() {
        return `id: ${this.id}, roasterName: ${this.roasterName}, location: ${this.location}, rating: ${this.rating}, createdAt: ${this.createdAt}, updatedAt: ${this.updatedAt}`;
    }

}
