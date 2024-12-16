class Car
{
    constructor(brand, model, year, horsePower, tankSize, consumption)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.horsePower = horsePower;
        this.tankSize = tankSize;
        this.consumption = consumption;
    }

    DisplayCarInfo(){
        return `Your ${this.brand} ${this.model} ${this.year} has ${this.horsePower} horse power, ${this.tankSize}L capacity and consumes ${this.consumption}L/100km`;
    }
}

export default Car