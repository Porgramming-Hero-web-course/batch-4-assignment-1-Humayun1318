{
  //Problem-7
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    constructor(public make: string, public model: string, public year: number) { }
    getCarAge(): number {
      const currentYear = new Date().getFullYear();
      if (this.year > currentYear) {
        console.log(`Coming soon in ${this.year}`);
        return this.year;
      }
      return currentYear - this.year;
    }
  }

  // Sample Input 1:
  // const car = new Car("Honda", "Civic", 2030);
  // console.log(car.getCarAge());

  // Sample Output 1:
  // 6(assuming current year is 2024)
  //
}