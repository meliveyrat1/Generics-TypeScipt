//Generics

//*crear componenetes que sean reutilizables
//*codigo reutilizable que funciona con multiples tipos
//*pueden ser funciones, interaces o clases.

interface Person {
    id: number;
    name: string;
}

class People {
    private items : Person[] = [];

    addItem(newItem: Person): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items))
    }

    getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): Person | undefined {
        return this.items.find((item: Person) => item.id === id)
    }
}

const personCollection = new People();
const newData = {
    id: 1,
    name: "Melina"
}

personCollection.addItem(newData);


const newData2 = {
    id: 2,
    name: "Alejandro"
}

personCollection.addItem(newData2);
personCollection.getItems();

//supongamos que la empresa que esta trabajando con esta base de datos, ahora quiere agregar productos
//para no ducplicar todo el código lo que usamos son los type unions



interface Person2 {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    price: number
}

type dataType = Person2 | Product

class DataCollection {
    private items : Person2[] = [];

    addItem(newItem: dataType): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items))
    }

    getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): dataType | undefined {
        return this.items.find((item: dataType) => item.id === id)
    }
}

const personCollection2 = new DataCollection();
const newData1 = {
    id: 3,
    name: "Anna"
}

personCollection2.addItem(newData1);

const productCollection  = new DataCollection();
const newData3 = {
    id: 4,
    name: "beer",
    price: 58
}

personCollection2.addItem(newData3);
personCollection2.getItems();

//el problema de utilizar los type unions es que mi proyecto no va a ser escalable
//porque tengo que ir agregando cada vez que yo quiera sumar un nuevo dato
//para eso existen los generics

interface Person3 {
    id: number;
    name: string;
}

interface Employee extends Person3 {
   role: string
}

interface Product2 {
    id: number;
    name: string;
    price: number
}


//COMO CONVENSION SE UTLIZA LA T que va a ser nuestro generic, se refiere a type y va entre <> 
//para solucionar el error que me salia con name y id, debo colocar un extends en mi clase
class DataCollection1<T extends {id: number, name: string}> { //la T puede ser, person, product o employee
    private items : T[] = [];

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items))
    }

     getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    } 
}

const personCollection3 = new DataCollection1<Person3>(); //colocamos enre <> la inerface que queramos usar
const newData4 = {
    id: 6,
    name: "Santino"
}

personCollection3.addItem(newData4);

const productCollection2 = new DataCollection1<Product2>();
const newData5 = {
    id: 7,
    name: "beer",
    price: 98
}

personCollection3.addItem(newData5);
personCollection3.getItems();

