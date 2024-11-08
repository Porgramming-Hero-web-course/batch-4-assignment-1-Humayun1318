
# The significance of union and intersection types in Typescript.

Typescript has become a most popular run time environment in development. It gives us to more safety in types where developers are prevented to write the wrong code before the execution. In Typescript there are two important feature that are Union Types and Intersection Types. So, today we are exploring this two feature why these types are important and how they work and also where they can be useful in real problem.


## What Are Union Types?
Union Types allows us to hold multiple Types in a variable. With that it give us the flexibility to work with the different types using a single variable or parameter.

For the Union, uses the (|) operator.

## Examples

```typescript

type TypesOfUnion = string | number | boolean;

let exVar: TypesOfUnion;
exVar = "Hello";  // valid
exVar = 42;       // valid
exVar = true;     // valid
exVar = [];       // invalid, it can be an error
```
In this Examples: typesOfUnion holds the three variable types and it can be either string, number, and boolean. So if you want you can store this three types of variable using typesOfUnion. Also there is a possible to store the custom type using Union.

## Examples With Types Alias:
Using type Alias, we can use like this
```typescript

type CustomVariable1 = { presentAddress: string}
type CustomVariable2 ={permanentAddress: string }

type customVariable = CustomVariable1 | CustomVariable2;

const ex1: CustomVariable = { presentAddress: "Chattagram" }; // valid
const ex2: CustomVariable = { permanentAddress: "Lohagra" }; // valid
const ex3: CustomVariable = { presentAddress: "USA", permanentAddress: "Bangladesh" }; // invalid - TypeScript expects one or the other, not both.

```

So, as we can see in the customVariable hold a another two custom type of Alias (CustomVariable1) and (CustomVariable2). If you want it can be either use customVariable1 or CustomVariable2 using the CustomVariable.


## Benefits of Union Types:

- Minimizing error with ensure the predefined Types are assigned.
- Union can help to accept the unwanted values.


## Use Case

```typescript
function getUser( users: 'normalUser' | 'admin' | 'guest'){
    if (users ==='normalUser') return "You can use this site as a user";
    if (users ==='admin') return "You can use this site as an admin";
return "guest";
}
```

So in this function (getUser),  will decide that who will use this site. Base on the user the function will provide the access.

## What Are Intersection Types? 
In intersection types, you can combine two or more types into one.
It give us the flexibility to holds the type of object two or more Or variables whatever we prefer in a single variable.

For the Intersection, uses the (&) operator.

## Examples

```typescript

interface Name = {name: string};
interface Age = {age: number};

type Person = Name & Age;

let person : Person = {name: 'Rasel', age: 35} // valid
let person : Person = {name: 'Rasel', age: 35, add: 'ctg'} // Invalid Because, (add: 'ctg') property haven't present in Person type.
```
Here, Person holds the properties from both the interface type Name and Age. And it will must have the properties name and age also otherwise it will through an error if any properties are absent.It will also prevent the another property entry in the Person type.

## Benefits of Intersection Types:

- Ensure all the intersection property must be included.
- To help the complex type definition without redundancy.

## Use Case

```typescript
interface Name = {name: string};
interface Age = {age: number};

function getUserDetails( users: Name & Age) : string{
    return `${users.name} is ${user.age} years old`;
}
```

So in this function (getUserDetails), requires the properties from both Name and Age. And ensure that it will not accept the other properties except name and age. Must sure to have this properties, also ensure the missing if will not provide the name and age.


## Comparing Union and Intersection Types:
- Union give us the flexibility when we need to store multiple types in a variable. Just like the (or) operator.
- Intersection give us the flexibility when we need to combine multiple object property into one. Just like the (and) operator.


Beneficial way to think of union types as "either/or" and intersection types  as " both/and" types.