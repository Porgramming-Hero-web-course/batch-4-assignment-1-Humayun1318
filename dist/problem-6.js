"use strict";
{
    const updateProfile = (obj1, obj2Partial) => {
        return Object.assign(Object.assign({}, obj1), obj2Partial);
    };
    // Sample Input :
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));
    // Sample Output:
    // {
    //   name: "Alice",
    //   age: 26,
    //   email: "alice@example.com"
    // }
    //
}
