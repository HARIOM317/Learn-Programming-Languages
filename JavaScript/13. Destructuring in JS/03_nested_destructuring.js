const user = {
  id: 101,
  details: {
    username: "harry",
    email: "harry@example.com",
  },
};

// Nested Destructuring
const {
  details: { username, email },
} = user;

console.log("Username :", username);
console.log("Email :", email);
