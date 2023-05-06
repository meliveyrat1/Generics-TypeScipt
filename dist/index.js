"use strict";
//Generics
class People {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const personCollection = new People();
const newData = {
    id: 1,
    name: "Melina"
};
personCollection.addItem(newData);
const newData2 = {
    id: 2,
    name: "Alejandro"
};
personCollection.addItem(newData2);
personCollection.getItems();
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const personCollection2 = new DataCollection();
const newData1 = {
    id: 3,
    name: "Anna"
};
personCollection2.addItem(newData1);
const productCollection = new DataCollection();
const newData3 = {
    id: 4,
    name: "beer",
    price: 58
};
personCollection2.addItem(newData3);
personCollection2.getItems();
//COMO CONVENSION SE UTLIZA LA T que va a ser nuestro generic, se refiere a type y va entre <> 
class DataCollection1 {
    constructor() {
        this.items = [];
        /*   getNames(): string[] {
              return this.items.map((item) => item.name);
          }
      
          getItemById(id: number): T | undefined {
              return this.items.find((item: T) => item.id === id)
          } */
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
}
const personCollection3 = new DataCollection1(); //colocamos enre <> la inerface que queramos usar
const newData4 = {
    id: 6,
    name: "Santino"
};
personCollection3.addItem(newData4);
const productCollection2 = new DataCollection1();
const newData5 = {
    id: 7,
    name: "beer",
    price: 98
};
personCollection3.addItem(newData5);
personCollection3.getItems();
