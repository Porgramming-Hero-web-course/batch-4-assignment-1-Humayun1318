{
  //Problem-5
  //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  //Hints: Use keyof

  const getProperty = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
    return obj[key];
  }


  // Sample Input:
  // const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));

  // Sample Output:
  // Alice;


  //
}