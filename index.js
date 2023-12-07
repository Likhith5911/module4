const names = ["James", "John", "Alice", "Bob", "Jessica"];

function greet(names) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log(`Goodbye ${name}`);
    } else {
      console.log(`Hello ${name}`);
    }
  }
}

greet(names);
