// Define an interface to describe the shape of a user object.
// An interface is like a contract that ensures an object has specific properties.
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

// Create a class that can greet users.
class Greeter {
  private user: User;

  // The constructor is called when a new instance of the class is created.
  // It takes a user object that must match the 'User' interface.
  constructor(user: User) {
    this.user = user;
  }

  // A method to generate a greeting message.
  // It specifies that it will return a string.
  public getGreeting(): string {
    return `Hello, ${this.user.firstName} ${this.user.lastName}! You are ${this.user.age} years old. 👋`;
  }
}

// Create a user object. TypeScript checks that it matches the 'User' interface.
const user: User = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30
};

// Create a new instance of the Greeter class, passing the user object.
const greeter = new Greeter(user);

// Call the getGreeting method and log the result to the console.
console.log(greeter.getGreeting());
// Expected Output: Hello, Jane Doe! You are 30 years old. 👋
