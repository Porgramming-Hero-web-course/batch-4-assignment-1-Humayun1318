{
  //Problem-6
  //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.


  interface Profile {
    name: string,
    age: number,
    email: string,
  }

  type UpdateProfile = {
    [Key in keyof Profile]?: Profile[Key] | undefined;
  }
  const updateProfile = (obj1: Profile, obj2Partial: UpdateProfile): Profile => {
    return { ...obj1, ...obj2Partial };
  }

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