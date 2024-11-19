//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Person {
    name: string;
    age: number;
    city: string;
}

let person1: Person = {
    name: "Madiha",
    age: 25,
    city: "New York"
};

let person2: Person = {
    name: "Komal",
    age: 30,
    city: "London"
};

let person3: Person = {
    name: "Tasbiha",
    age: 22,
    city: "Paris"
};

console.log(person1);
console.log(person2);
console.log(person3);
