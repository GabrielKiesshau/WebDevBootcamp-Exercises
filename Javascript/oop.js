function Vehicle(make, model, year, isRunning) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
    this.turnOn = () => {
        isRunning = true;
    };
    this.turnOff = () => {
        isRunning = false;
        return;
    };
    this.honk = () => {
        if (isRunning) {
            console.log('beep');
        }
        return;
    };
}

var myCar = new Vehicle('a', 'b', 1987, false);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.isRunning);
myCar.honk();
myCar.turnOn();
console.log(myCar.isRunning);
myCar.honk();