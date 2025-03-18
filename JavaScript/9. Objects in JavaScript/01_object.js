const student = {
  name: "Hariom",
  age: 22,
  marks: 98,
  gender: "Male",
};

console.log(student);

const post = {
  username: "@hariomsinghrajput",
  content: "This is my #firstPost",
  likes: 10500,
  reposts: 8,
  tags: ["@abhi", "@amanmewada", "@sumitkumar"],
};

console.log(post);

// access particular property data
console.log("Username = ", post["username"]);
console.log("Content = ", post.content);
console.log("Tags = ", post.tags);

let prop = "likes";
console.log("Likes = ", post[prop]);
