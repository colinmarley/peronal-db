export class CoffeeRoastModel{

    id: string;
    roastName: string;
    roastType: string;
    process: string;
    flavors: Array<string>;
    roasterName: string;
    sourcedFrom: string;
    sourceName: string;

    constructor (
        id: string, roastName: string, roastType: string,
        process: string, flavors: Array<string>, roasterName: string,
        sourcedFrom: string, sourceName: string) {
        this.id = id;
        this.roastName = roastName;
        this.roastType = roastType;
        this.process = process;
        this.flavors = flavors;
        this.roasterName = roasterName;
        this.sourcedFrom = sourcedFrom;
        this.sourceName = sourceName;
    }

    toLoggableString() {
        return `id: ${this.id}, roastName: ${this.roastName}, roastType: ${this.roastType}, process: ${this.process}, flavors: ${this.flavors}, roasterName: ${this.roasterName}, sourcedFrom: ${this.sourcedFrom}, sourceName: ${this.sourceName}`;
    }
}
    
// Firestore data converter
export const coffeeRoastConverter = {
    toFirestore: (roast: CoffeeRoastModel) => {
        return {
            id: roast.id,
            roastName: roast.roastName,
            roastType: roast.roastType,
            process: roast.process,
            flavors: roast.flavors,
            roasterName: roast.roasterName,
            sourcedFrom: roast.sourcedFrom,
            sourceName: roast.sourceName
        }
    },
    fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options);
        return new CoffeeRoastModel(
            data.id, data.roastName, data.roastType,
            data.process, data.flavors, data.roasterName,
            data.sourcedFrom, data.sourceName
        );
    }
};
