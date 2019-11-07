class Vehicals {
    vehical(){
        console.log("all vehicals type");
    }
}

class Car extends Vehicals {
    model(){
        console.log("Audi..!")
    }
}

let car = new Car();
car.vehical();
car.model();
