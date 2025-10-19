# Hey <img src="https://user-images.githubusercontent.com/72663882/171687151-bb31c996-c9d2-49c8-b593-734946893b23.gif" alt="waving hand gif" aria-hidden="true" width="40" />

## Im Going To Be Giving Example's On How To Use TypeScript In Several Way's 
```html
// 1. Type Annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Interfaces
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user1: User = {
  id: 1,
  name: "Bob",
};

// 3. Classes and Inheritance
class Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();

// 4. Generics
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(42));
console.log(identity<string>("TypeScript"));

//
