function sayHello(person) {
  return `Hello, ${person.firstName}!`;
}

const ada = {
  firstName: "Ada",
  lastName: "Lovelace",
};

console.log(sayHello(ada));
