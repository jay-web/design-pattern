// * Old method
function Car(model, year, mileage){
    this.model = model;
    this.year = year;
    this.mileage = mileage;
}

Car.prototype.toString = function(){
    console.log(`${this.model} of the year ${this.year} has mileage of ${this.mileage}`);
}


let maruti = new Car("Maruti", 2010, 50);

maruti.toString();

// ? =================================================================================

// * ES2015 Class Method
class SuperCar {
    constructor(model, year, mileage){
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    toString = () => {
        console.log(`This SuperCar ${this.model} of the year ${this.year} has mileage of ${this.mileage}`);
    }
}

let tesla = new SuperCar("Tesla", 2020, 120);

tesla.toString();